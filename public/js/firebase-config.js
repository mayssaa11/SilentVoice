// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEEpuE3-crI5JuzEe3SJmBpU0lGMXTwvA",
    authDomain: "silentvoice-247d.firebaseapp.com",
    projectId: "silentvoice-247d",
    storageBucket: "silentvoice-247d.firebasestorage.app",
    messagingSenderId: "243437939888",
    appId: "1:243437939888:web:f8d78fa845cb42a4e6df75",
    measurementId: "G-W9F64VXEJ9"
  };

// Initialize Firebase + export
export const app = initializeApp(firebaseConfig);