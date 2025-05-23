// home.js
import { signOut, monitorAuthState } from './auth.js';

document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logout-btn");
  const welcomeText = document.getElementById("welcome");
  const guestSection = document.getElementById("guest-content");
  const loggedInSection = document.getElementById("logged-in-content");

  monitorAuthState((user) => {
    if (user) {
      // Show logged-in UI
      if (welcomeText) {
        welcomeText.textContent = `Welcome, ${user.displayName || user.email}`;
      }
      if (loggedInSection) loggedInSection.style.display = "flex";
      if (guestSection) guestSection.style.display = "none";
    } else {
      // Show guest UI
      if (loggedInSection) loggedInSection.style.display = "none";
      if (guestSection) guestSection.style.display = "flex";
    }
  });

  // Handle logout
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      signOut().catch(err => alert("Error signing out: " + err.message));
    });
  }
});
