// sign-email.js
import { signInWithEmail } from './auth.js';

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const togglePassword = document.querySelector(".toggle-password");

  // Toggle password visibility
  if (togglePassword) {
    togglePassword.addEventListener("click", () => {
      const type = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = type;
      togglePassword.textContent = type === "password" ? "👁️" : "🙈";
    });
  }

  // Handle sign-in
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      const password = passwordInput.value;

      try {
        await signInWithEmail(email, password);
        window.location.href = "page2.html";
      } catch (error) {
        alert("Sign-in failed: " + error.message);
      }
    });
  }
});
