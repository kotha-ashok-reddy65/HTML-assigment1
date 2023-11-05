"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Add click event listeners to the Submit and Reset buttons
  document.getElementById("submitBtn").addEventListener("click", submitForm);
  document.getElementById("resetBtn").addEventListener("click", resetForm);
});

function submitForm() {
  var firstName = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;
  var dob = document.getElementById("dob").value;
  var country = document.getElementById("country").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var profession = document.getElementById("profession").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;

  if (
    !firstName ||
    !lastName ||
    !dob ||
    !country ||
    !gender ||
    !profession ||
    !email ||
    !mobile
  ) {
    alert("All fields are required!");
    return;
  }

  var popupMessage =
    "First Name: " +
    firstName +
    "\n" +
    "Last Name: " +
    lastName +
    "\n" +
    "Date of Birth: " +
    dob +
    "\n" +
    "Country: " +
    country +
    "\n" +
    "Gender: " +
    gender +
    "\n" +
    "Profession: " +
    profession +
    "\n" +
    "Email: " +
    email +
    "\n" +
    "Mobile Number: " +
    mobile;

  alert(popupMessage);

  document.getElementById("survey_form").reset();
}

function resetForm() {
  document.getElementById("survey_form").reset();
}
