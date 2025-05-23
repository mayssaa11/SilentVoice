const togglePassword = document.querySelector(".toggle-password");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function () {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;
    this.textContent = type === "password" ? "👁️" : "🙈";
});

