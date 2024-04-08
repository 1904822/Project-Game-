//Data aray
var PlayersData = [];

    //Registration Function that disables form after registration is complete 
      function Register(){
        //Form Data
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var dob = document.getElementById("dob").value;
        var email = document.getElementById("email").value;
        var gender = document.getElementById("gender").value;
        var address = document.getElementById("address").value;
        var education = document.getElementById("education").value;        
        //Error Messages
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

        // Firstname Validation
        if (firstName.length < 3) {
          firstNameError.textContent =
            "First name must be at least 3 characters long";
          return;
        }

        //Lastname Validation
        if (lastName.length < 3) {
            lastNameError.textContent =
              "Last name must be at least 3 characters long";
            return;
          }

          //DOB Validation
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
          }

          //Email Validation
          if (!email.endsWith("@SomeEmail.com")) {
            emailError.textContent = "Email must end with @SomeEmail.com";
            return;
          }

          //Gender Validation
          if (gender === "") {
            genderError.textContent = "Please select a gender";
            return;
          }
  
          //educational Validation
          if (education.trim() === "") {
            educationError.textContent = "Educational level is required";
            return;
          }

          //educational Validation
          if (education.trim() === "") {
            educationError.textContent = "Educational level is required";
            return;
          }

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

          console.log(player)

        // Append the validated content to PlayersData array
        PlayersData.push(player);
        

        // Disable form fields and register button
         var formFields = document.getElementsByTagName("input");         
         for (var i = 0; i < formFields.length; i++) {
          formFields[i].disabled = true;
         }
        document.getElementById("gender").disabled = true;
        document.getElementById("address").disabled = true;
        document.getElementById("education").disabled = true;
        document.querySelector("button[type='button']").disabled = true;

         // Enable End Game and Play buttons
        document.getElementById("endGameBtn").disabled = false;
        document.getElementById("playBtn").disabled = false;
        document.getElementById("game-buttons").classList.remove("hidden");
 
        console.log("Player registered successfully:", player);
        console.log("All Players:", PlayersData);
        
      }

      function PlayGame() {
        window.location.href = "game.js"; // Replace "path/to/your/file.html" with the actual path to your HTML file
    }

    document.getElementById("playBtn").addEventListener("click", PlayGame);

