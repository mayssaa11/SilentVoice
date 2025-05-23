/*import { signUpWithEmail } from './auth.js';

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("register-form");
  const emailInput = document.getElementById("email");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const confirmInput = document.getElementById("confirm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    const confirm = confirmInput.value;

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await signUpWithEmail(email, password, username);
      window.location.href = "page2.html";
    } catch (error) {
      alert("Registration failed: " + error.message);
    }
  });
});*/

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    // User successfully created
    const user = userCredential.user;
    // You can now store extra info in Firestore if needed
  })
  .catch(error => {
    console.error("Error creating user:", error.message);
  });

