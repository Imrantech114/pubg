// Reference to Firestore database
const teamsCollection = db.collection('teams');

const teamsBody = document.getElementById('teams-body');
const teamSelect = document.getElementById('team-select');
const resultForm = document.getElementById('result-form');

// Load teams from Firestore and render table and select options
function loadTeams() {
  teamsCollection.orderBy('points', 'desc').get().then(snapshot => {
    teamsBody.innerHTML = '';
    teamSelect.innerHTML = '<option value="" disabled selected>Select team</option>';
    let position = 1;
    snapshot.forEach(doc => {
      const team = doc.data();
      // Render team row
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${position++}</td>
        <td>${team.name}</td>
        <td>${team.points}</td>
        <td>${team.kills}</td>
        <td>${team.matchesPlayed}</td>
      `;
      teamsBody.appendChild(row);

      // Add to select options
      const option = document.createElement('option');
      option.value = doc.id;
      option.textContent = team.name;
      teamSelect.appendChild(option);
    });
  });
}

// Listen for real-time updates
teamsCollection.orderBy('points', 'desc').onSnapshot(snapshot => {
  teamsBody.innerHTML = '';
  teamSelect.innerHTML = '<option value="" disabled selected>Select team</option>';
  let position = 1;
  snapshot.forEach(doc => {
    const team = doc.data();
    // Render team row
    const row = document.createElement('tr');
    row.innerHTML = \`
      <td>\${position++}</td>
      <td>\${team.name}</td>
      <td>\${team.points}</td>
      <td>\${team.kills}</td>
      <td>\${team.matchesPlayed}</td>
    \`;
    teamsBody.appendChild(row);

    // Add to select options
    const option = document.createElement('option');
    option.value = doc.id;
    option.textContent = team.name;
    teamSelect.appendChild(option);
  });
});

// Add result form submit handler
resultForm.addEventListener('submit', async e => {
  e.preventDefault();
  const teamId = teamSelect.value;
  const points = parseInt(document.getElementById('points-input').value);
  const kills = parseInt(document.getElementById('kills-input').value);

  if (!teamId) {
    alert('Please select a team');
    return;
  }

  // Update team data in Firestore
  const teamRef = teamsCollection.doc(teamId);
  const teamDoc = await teamRef.get();
  if (!teamDoc.exists) {
    alert('Selected team not found!');
    return;
  }

  const teamData = teamDoc.data();
  await teamRef.update({
    points: teamData.points + points,
    kills: teamData.kills + kills,
    matchesPlayed: teamData.matchesPlayed + 1
  });

  // Reset form
  resultForm.reset();
  teamSelect.value = '';
});

// Initial load
loadTeams();
