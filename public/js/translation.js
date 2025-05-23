// translation.js
import { saveTranslation } from './firestore.js';
import { monitorAuthState } from './auth.js';

let currentUser = null;

// Track the logged-in user
monitorAuthState((user) => {
  currentUser = user;
});

document.getElementById('video-upload').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const video = document.getElementById('video-preview');
    video.src = URL.createObjectURL(file);
    simulateTranslation("Translated ASL content from uploaded video");
  }
});

document.getElementById('start-camera').addEventListener('click', () => {
  const video = document.getElementById('video-preview');
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      video.srcObject = stream;
    })
    .catch(err => {
      console.error("Camera access denied:", err);
    });
});

function simulateTranslation(text) {
  const output = document.getElementById('output-text');
  output.textContent = text;

  if (currentUser) {
    saveTranslation(currentUser.uid, text)
      .then(() => console.log("Translation saved"))
      .catch((err) => console.error("Error saving translation:", err));
  }
}