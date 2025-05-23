// firestore.js
import { app } from './firebase-config.js';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';

const db = getFirestore(app);
const auth = getAuth(app);

// Add a translation history record for the current user
export async function addTranslationHistory(collectionName, data) {
  const user = auth.currentUser;
  if (!user) return console.warn("No user signed in.");

  try {
    const docRef = await addDoc(collection(db, collectionName), {
      uid: user.uid,
      ...data, // Allow flexible data, including 'level', 'text', etc.
      timestamp: new Date()
    });
    console.log("Document saved with ID:", docRef.id);
  } catch (error) {
    console.error("Error saving document:", error);
  }
}


// Get translation history for the current user
export async function getTranslationHistory() {
  const user = auth.currentUser;
  if (!user) return console.warn('No user signed in.');

  try {
    const q = query(collection(db, 'translationHistory'), where('uid', '==', user.uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error retrieving history:", error);
    return [];
  }
}

// Add to learningProgress
export async function addLearningProgress(uid, progressData) {
  await addDoc(collection(db, "users", uid, "learningProgress"), progressData);
}

// Get from learningProgress
export async function getLearningProgress(uid) {
  const querySnapshot = await getDocs(collection(db, "users", uid, "learningProgress"));
  return querySnapshot.docs.map(doc => doc.data());
}

// Example CRUD for admin/dev use
export async function updateDocument(collectionName, docId, updatedData) {
  try {
    await updateDoc(doc(db, collectionName, docId), updatedData);
    console.log("Document successfully updated");
  } catch (error) {
    console.error("Error updating document:", error);
  }
}

export async function deleteDocument(collectionName, docId) {
  try {
    await deleteDoc(doc(db, collectionName, docId));
    console.log("Document successfully deleted");
  } catch (error) {
    console.error("Error deleting document:", error);
  }
}