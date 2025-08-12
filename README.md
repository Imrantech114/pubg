# PUBG Tournament Live Standings Website

## Overview
This is a free, simple PUBG tournament website with live standings. It uses Firebase Firestore for real-time updates and Vercel for free hosting.

## Setup Steps

### 1. Firebase Setup
- Create a Firebase project at https://console.firebase.google.com/
- Enable Firestore database in test mode
- Add a web app and copy your Firebase config keys
- Replace placeholders in `firebase-config.js` with your Firebase config

### 2. Deploy to Vercel
- Create a free Vercel account at https://vercel.com/
- Upload this project folder (or push to GitHub and connect)
- Deploy the site with Vercel’s free plan

### 3. Add Teams to Firestore
- Open Firestore in Firebase Console
- Create a collection named `teams`
- Add documents for each team with these fields:
  - `name` (string) e.g. "Team X"
  - `points` (number) e.g. 0
  - `kills` (number) e.g. 0
  - `matchesPlayed` (number) e.g. 0

### 4. Use the Website
- Visit your deployed site URL
- Use the form to add match results
- Standings will update live for all viewers

---
Feel free to customize styles and teams as you like!
