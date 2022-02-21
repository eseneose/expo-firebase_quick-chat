import { initializeApp, getApps } from 'firebase/app'
import {
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    serverTimestamp,
    query,
    orderBy,
} from 'firebase/firestore'
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from 'firebase/auth'
// import { getDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyATKfA-tvDRdoBb2NAFz3uITgxVbZbpxEo",
    authDomain: "quick-chat-ee7de.firebaseapp.com",
    projectId: "quick-chat-ee7de",
    storageBucket: "quick-chat-ee7de.appspot.com",
    messagingSenderId: "367158089791",
    appId: "1:367158089791:web:9927ec24d5cd0f1c30408a",
    measurementId: "G-HRH48935M9"
};

if (!getApps().length) initializeApp(firebaseConfig)

export {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    collection,
    addDoc,
    getFirestore,
    onSnapshot,
    serverTimestamp,
    query,
    orderBy,
}