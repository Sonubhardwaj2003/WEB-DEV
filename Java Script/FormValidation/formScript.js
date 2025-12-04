document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form submission

  let isValid = true;

  // Clear previous errors
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent =
      "Name must be at least 3 characters.";
    isValid = false;
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "Enter a valid email address.";
    isValid = false;
  }

  // Password validation with regex
  const password = document.getElementById("password").value;
  const passwordPattern =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  if (!passwordPattern.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters, include uppercase, lowercase, number, and special character.";
    isValid = false;
  }

  // Confirm Password validation
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (confirmPassword !== password) {
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match.";
    isValid = false;
  }

  // If valid, submit or show success
  if (isValid) {
    alert("Form submitted successfully!");
    document.querySelectorAll("#myForm input").forEach((ele) => {
      ele.value = ""; // Clear the value of each input
    });

    // You can now send data to server using fetch/AJAX
  }
});
