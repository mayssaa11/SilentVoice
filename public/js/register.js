// register.js
import { signUpWithGoogle } from './auth.js';

document.addEventListener("DOMContentLoaded", () => {
  const googleBtn = document.querySelector(".google-button");

  if (googleBtn) {
    googleBtn.addEventListener("click", () => {
      signUpWithGoogle()
        .then(() => {
          window.location.href = "page2.html"; // Redirect after registration
        })
        .catch((error) => {
          alert("Google registration failed: " + error.message);
        });
    });
  }
});