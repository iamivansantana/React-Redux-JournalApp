import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCoVZ7lH0YKZCCEyLnyWQkkBmMnR-Lq7Ak',
	authDomain: 'react-app-journalapp-73481.firebaseapp.com',
	projectId: 'react-app-journalapp-73481',
	storageBucket: 'react-app-journalapp-73481.appspot.com',
	messagingSenderId: '12866299111',
	appId: '1:12866299111:web:c5c30bd405bde65649ee42',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider };
