// =====================
// Part 1: Event Handling
// =====================
// Example: Display a message when the button is clicked
const clickBtn = document.getElementById("clickBtn");
const message = document.getElementById("message");

clickBtn.addEventListener("click", () => {
  message.textContent = "🎉 Button was clicked!";
});

// =============================
// Part 2: Interactive Elements
// =============================

// Light/Dark Mode Toggle
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter with Increment/Decrement
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("increment").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
document.getElementById("decrement").addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

// Collapsible FAQ Section
const faqTitle = document.getElementById("faqTitle");
const faqContent = document.getElementById("faqContent");
faqTitle.addEventListener("click", () => {
  faqContent.classList.toggle("hidden");
});

// ================================
// Part 3: Form Validation
// ================================
// Custom validation for name, email, and password
const form = document.getElementById("signupForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission until validation passes
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let errors = [];

  // Validate name
  if (name === "") errors.push("Name is required.");

  // Validate email using regex
  if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    errors.push("Invalid email format.");
  }

  // Validate password length
  if (password.length < 6) errors.push("Password must be at least 6 characters.");

  // Show feedback
  if (errors.length > 0) {
    feedback.style.color = "red";
    feedback.innerHTML = errors.join("<br>");
  } else {
    feedback.style.color = "green";
    feedback.textContent = "✅ Form submitted successfully!";
    form.reset(); // Clear the form after success
  }
});
