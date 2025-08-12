// Replace the placeholders with your Firebase config keys
const firebaseConfig = {
  apiKey: "AIzaSyD3dsVqro1U5UzrX_FyD907PnjzOG08lPA",
  authDomain: "pubg-tournament-4aac7.firebaseapp.com",
  projectId: "pubg-tournament-4aac7",
  storageBucket: "pubg-tournament-4aac7.firebasestorage.app",
  messagingSenderId: "1073527020666",
  appId: "1:1073527020666:web:c09349425df05e9f1eafc3"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
