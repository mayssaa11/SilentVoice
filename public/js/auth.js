// auth.js
import { app } from './firebase-config.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Sign up with email/password and username
export async function signUpWithEmail(email, password, username) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(userCredential.user, { displayName: username });
  return userCredential.user;
}

// Sign in with email/password
export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Sign in with Google
export function signInWithGoogle() {
  return signInWithPopup(auth, provider);
}

// Sign out
export function signOut() {
  return firebaseSignOut(auth);
}

// Monitor auth state
export function monitorAuthState(callback) {
  onAuthStateChanged(auth, callback);
}
