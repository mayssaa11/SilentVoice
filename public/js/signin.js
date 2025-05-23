import { signInWithGoogle } from './auth.js';

document.addEventListener("DOMContentLoaded", () => {
  const googleBtn = document.querySelector(".google-button");

  if (googleBtn) {
    googleBtn.addEventListener("click", () => {
      signInWithGoogle()
        .then(() => {
          // Redirect to home page after successful login
          window.location.href = "page2.html";
        })
        .catch((error) => {
          alert("Google sign-in failed: " + error.message);
        });
    });
  }
});
