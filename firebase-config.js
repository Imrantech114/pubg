// Replace the placeholders with your Firebase config keys
const firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "YOUR-MESSAGING-SENDER-ID",
  appId: "YOUR-APP-ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
