let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;
let dob = document.getElementById("dob").value;
let email = document.getElementById("email").value;
let gender = document.getElementById("gender").value;
let address = document.getElementById("address").value;
let education = document.getElementById("education").value;

let playBtn = document.getElementById("playBtn");
let firstNameError = document.getElementById("firstNameError");
let lastNameError = document.getElementById("lastNameError");
let dobError = document.getElementById("dobError");
let emailError = document.getElementById("emailError");
let genderError = document.getElementById("genderError");
let educationError = document.getElementById("educationError");

let PlayersData = [];

playBtn.disabled = true;
playBtn.classList.add("disabled");
function clearErrorMessage() {
  // Clear previous error messages
  firstNameError.textContent = "";
  lastNameError.textContent = "";
  dobError.textContent = "";
  emailError.textContent = "";
  genderError.textContent = "";
  educationError.textContent = "";
  clearInputFields();
}

function clearInputFields() {
  firstName.value = "";
  lastName.value = "";
  dob.value = "";
  email.value = "";
  gender.value = "";
  education.value = "";
}

function createPlayer() {
  return {
    firstName: firstName,
    lastName: lastName,
    dob: dob,
    email: email,
    gender: gender,
    address: address,
    education: education,
  };
}

function validateForm() {
  // Validation
  if (firstName.length < 3) {
    firstNameError.textContent =
      "First name must be at least 3 characters long";
  }

  if (lastName.trim() === "") {
    lastNameError.textContent = "Last name is required";
    return;
  }

  if (dob.trim() === "") {
    dobError.textContent = "Must enter DoB";
  }
  // Age Validation
  calculateAge();
  if (!email.endsWith("@SomeEmail.com")) {
    emailError.textContent = "Email must end with @SomeEmail.com";
    return;
  }

  if (!["male", "female"].includes(gender.trim())) {
    genderError.textContent = "Gender is required";
    return;
  }

  if (!["primary", "secondary", "tertiary"].includes(education.trim())) {
    educationError.textContent = "Educational level is required";
    return;
  }

  return true;
}
function calculateAge() {
  let dobDate = new Date(dob);
  let age = new Date().getFullYear() - dobDate.getFullYear();
  if (age <= 12) {
    dobError.textContent = "Age must be greater than 12";
    return;
  } else if (age > 12) {
    console.log(age);
    document.getElementById("Age").setAttribute("value", age);
    return;
  }
}
function Register() {
  clearErrorMessage();
  validateForm();
  if (validateForm) {
    // Create a player object
    let player = createPlayer();
    // Append the validated content to PlayersData array
    PlayersData.push(player);
    return true;
  }
  return false;
}

//disables for after pressing registration button
// Function to check if all inputs are filled
function checkInputsFilled() {
  let formElements = document.getElementById("playerForm").elements;
  for (let i = 0; i < formElements.length; i++) {
    if (
      formElements[i].tagName.toLowerCase() === "input" &&
      formElements[i].value === ""
    ) {
      return false;
    }
  }
  return true;
}

// Function to disable form
function disableForm() {
  let formElements = document.getElementById("playerForm").elements;
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].disabled = true;
  }
  document.getElementById("RegistrationBtn").disabled = true;
}

// Add event listener to inputs to check when all inputs are filled
let inputFields = document.querySelectorAll("#playerForm input");
for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("input", function () {
    if (checkInputsFilled()) {
      document.getElementById("RegistrationBtn").disabled = false;
    }
  });
}

// Add event listener to registration button
document
  .getElementById("RegistrationBtn")
  .addEventListener("click", function () {
    if (checkInputsFilled() && Register()) {
      disableForm();
      playBtn.disabled = false;
      playBtn.className = "button";
    } else {
      alert("Please fill all inputs before registering.");
    }
  });

/*
    // Disable form fields and register button
    let formFields = document.getElementsByTagName("input");

    for (let i = 0; i < formFields.length; i++) {
      formFields[i].disabled = true;
    }
    document.getElementById("gender").disabled = true;
    document.getElementById("education").disabled = true;
    document.getElementById("register-button").disabled = true;

    // Enable End Game and Play buttons
    document.getElementById("endGameBtn").disabled = false;
    document.getElementById("playBtn").disabled = false;
    document.getElementById("game-buttons").classList.remove("hidden");

    console.log("Player registered successfully:", player);
    console.log("All Players:", PlayersData);
  }


  function playGame() {
    document.getElementsByTagName("h1")[0].classList.add("hidden");
    document.getElementsByTagName("h3")[0].classList.add("hidden");
    document.getElementById("playBtn").disabled = true;
    document.getElementById('register').classList.add("hidden");
    document.getElementById("game-content").classList.remove("hidden");
    createBoard(jeopardyCategories);
  }


  function endGame() {
    if (confirm("Would you like to end the Game?")) {
      document.getElementsByTagName("h1")[0].classList.remove("hidden");
      document.getElementsByTagName("h3")[0].classList.remove("hidden");
      document.getElementById("playBtn").disabled = false;
      document.getElementById('register').classList.remove("hidden");
      document.getElementById("game-content").classList.add("hidden");
    }
    else {
      alert("Continue to play on!");
    }
  }
  */

function PlayGame() {
  window.location.href = "./game.html";
}
document.getElementById("playBtn").addEventListener("click", PlayGame);
