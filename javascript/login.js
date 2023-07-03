const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Replace this with your login functionality
  console.log(`Username: ${username}, Password: ${password}`);
});