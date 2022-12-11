function showAsPreview(element) {
  const largeImage = document.getElementById("large-image");

  largeImage.src = element.src;
  largeImage.alt = element.alt;

  const oldActive = document.querySelector(".preview-active");
  oldActive.classList.remove("preview-active");

  element.classList.add("preview-active");
}

function openSignupModal() {
  const modal = document.getElementById("modal");
  modal.classList.add("open");
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("open");

  const emailErrorElement = document.getElementById("email-error");
  const emailField = document.getElementById("email");
  const signUpBtn = document.getElementById("signup-btn");

  emailErrorElement.textContent = ""; // reset error
  emailField.value = ""; // reset field value
  signUpBtn.disabled = true; // reset button to initial disabled state
}

function validateEmail() {
  const emailField = document.getElementById("email");
  const email = emailField.value;

  const emailErrorElement = document.getElementById("email-error");
  const signUpBtn = document.getElementById("signup-btn");

  // valid email
  if (email.includes("@") && email.includes(".de")) {
    emailErrorElement.textContent = "";
    signUpBtn.disabled = false;
  } else {
    // invalid email
    emailErrorElement.textContent = "Invalid email";
    signUpBtn.disabled = true;
  }
}

function signUp() {
  const emailField = document.getElementById("email");

  console.log("sign up user with email " + emailField.value);

  closeModal();
}
