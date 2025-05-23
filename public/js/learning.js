import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { addLearningProgress, getLearningProgress } from "./firestore.js";

const auth = getAuth();

export function saveLearningProgress(level) {
  const user = auth.currentUser;
  if (!user) {
    console.warn("No user is signed in.");
    return;
  }

  const progressData = {
    level,
    timestamp: new Date()
  };

  addLearningProgress(user.uid, progressData);
}

export async function displayUserProgress() {
  const user = auth.currentUser;
  if (!user) return console.warn("No user is signed in.");

  const progress = await getLearningProgress(user.uid);

  progress.forEach(entry => {
    if (entry.level) {
      console.log(`User has completed level: ${entry.level} at ${entry.timestamp}`);
    }
  });
}