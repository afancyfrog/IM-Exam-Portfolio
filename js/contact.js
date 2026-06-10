const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameFeedback = document.getElementById("name-feedback");
const emailFeedback = document.getElementById("email-feedback");
const messageFeedback = document.getElementById("message-feedback");

const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

// No actual functioniing email system yet....
// this is all just meant to simulate the process

function validateName() {
  if (nameInput.value.trim().length === 0) {
    nameFeedback.textContent = "Name is required";
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
  } else {
    nameFeedback.textContent = "";
    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (email.length === 0) {
    emailFeedback.textContent = "Email is required";
  } else if (!valid) {
    emailFeedback.textContent = "Enter a valid email";
  } else {
    emailFeedback.textContent = "";
  }

  emailInput.classList.toggle("valid", valid);
  emailInput.classList.toggle("invalid", !valid);
}

function validateMessage() {
  if (messageInput.value.trim().length < 10) {
    messageFeedback.textContent = "Message must be at least 10 characters";
    messageInput.classList.add("invalid");
    messageInput.classList.remove("valid");
  } else {
    messageFeedback.textContent = "";
    messageInput.classList.add("valid");
    messageInput.classList.remove("invalid");
  }
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
messageInput.addEventListener("input", validateMessage);

const submitBtn = document.getElementById("submit-btn");

function updateSubmitState() {
  const allValid =
    nameInput.classList.contains("valid") &&
    emailInput.classList.contains("valid") &&
    messageInput.classList.contains("valid");

  submitBtn.disabled = !allValid;
}

[nameInput, emailInput, messageInput].forEach((input) => {
  input.addEventListener("input", updateSubmitState);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const allValid =
    nameInput.classList.contains("valid") &&
    emailInput.classList.contains("valid") &&
    messageInput.classList.contains("valid");

  if (!allValid) return;

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  setTimeout(() => {
    successMessage.style.display = "block";

    form.reset();

    [nameInput, emailInput, messageInput].forEach((el) => {
      el.classList.remove("valid", "invalid");
    });

    nameFeedback.textContent = "";
    emailFeedback.textContent = "";
    messageFeedback.textContent = "";

    submitBtn.disabled = true;
    submitBtn.textContent = "Send Message";

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  }, 1200);
});
