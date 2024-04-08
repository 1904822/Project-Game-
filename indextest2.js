
function Register() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
  
    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("lastNameError");
    var dobError = document.getElementById("dobError");
    var emailError = document.getElementById("emailError");
    var genderError = document.getElementById("genderError");
    var educationError = document.getElementById("educationError");
  
    // Clear previous error messages
    firstNameError.textContent = "";
    lastNameError.textContent = "";
    dobError.textContent = "";
    emailError.textContent = "";
    genderError.textContent = "";
    educationError.textContent = "";
  
  
    // Validation
    if (firstName.length < 3) {
      firstNameError.textContent =
        "First name must be at least 3 characters long";
      return;
    };
  
    if (lastName.trim() === "") {
      lastNameError.textContent = "Last name is required";
      return;
    };
  
    if (dob.trim() === "") {
      dobError.textContent = "Must enter DoB"
    };
  
    var dobDate = new Date(dob);
    var age = new Date().getFullYear() - dobDate.getFullYear();
    if (age <= 12) {
      dobError.textContent = "Age must be greater than 12";
      return;
    }
    else if (age > 12){
        console.log(age);
        document.getElementById("Age").setAttribute("value", age);
        return;
      };
  
      
    if (!email.endsWith("@SomeEmail.com")) {
      emailError.textContent = "Email must end with @SomeEmail.com";
      return;
    };
  
    if (!["male", "female"].includes(gender.trim())) {
      genderError.textContent = "Gender is required";
      return;
    };
  
    if (!["primary", "secondary", "tertiary"].includes(education.trim())) {
      educationError.textContent = "Educational level is required";
      return;
    };
  
    // Create a player object
    var player = {
      firstName: firstName,
      lastName: lastName,
      dob: dob,
      email: email,
      gender: gender,
      address: address,
      education: education,
      };
  
    // Append the validated content to PlayersData array
    PlayersData.push(player);
}

//disables for after pressing registration button
     // Function to check if all inputs are filled
     function checkInputsFilled() {
        var formElements = document.getElementById("playerForm").elements;
        for (var i = 0; i < formElements.length; i++) {
            if (formElements[i].tagName.toLowerCase() === "input" && formElements[i].value === "")
             {
                return false;
            }
        }
        return true;
    }

    // Function to disable form
    function disableForm() {
        var formElements = document.getElementById("playerForm").elements;
        for (var i = 0; i < formElements.length; i++) {
            formElements[i].disabled = true;
        }
        document.getElementById("Registrationb").disabled = true;
    }

    // Add event listener to inputs to check when all inputs are filled
    var inputFields = document.querySelectorAll("#playerForm input");
    for (var i = 0; i < inputFields.length; i++) {
        inputFields[i].addEventListener("input", function () {
            if (checkInputsFilled()) {
                document.getElementById("Registrationb").disabled = false;
            }
        });
    }

    // Add event listener to registration button
    document.getElementById("Registrationb").addEventListener("click", function () {
        if (checkInputsFilled()) {
            disableForm();
        } else {
            alert("Please fill all inputs before registering.");
        }
    });
  
    /*
    // Disable form fields and register button
    var formFields = document.getElementsByTagName("input");
  
    for (var i = 0; i < formFields.length; i++) {
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