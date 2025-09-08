// ----------------------
// FORM VALIDATION
// ----------------------
document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("formMessage");

  // Clear previous messages
  message.textContent = "";

  // Custom validation rules
  if (username.length < 3) {
    message.textContent = "Username must be at least 3 characters.";
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    message.textContent = "Please enter a valid email address.";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters.";
    return;
  }

  // Success message
  message.style.color = "green";
  message.textContent = "Form submitted successfully!";
});

// ----------------------
// INTERACTIVE FEATURE 1: COUNTER
// ----------------------
let counterValue = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("increaseBtn").addEventListener("click", () => {
  counterValue++;
  counterDisplay.textContent = counterValue;
});

document.getElementById("decreaseBtn").addEventListener("click", () => {
  counterValue--;
  counterDisplay.textContent = counterValue;
});

// ----------------------
// INTERACTIVE FEATURE 2: THEME TOGGLE
// ----------------------
const themeToggleBtn = document.getElementById("themeToggle");
themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Update button text based on mode
  if (document.body.classList.contains("dark-mode")) {
    themeToggleBtn.textContent = "Switch to Light Mode";
  } else {
    themeToggleBtn.textContent = "Switch to Dark Mode";
  }
});
