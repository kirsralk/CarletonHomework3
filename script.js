// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt user for password criteria

    // Criteria 1: Length of Password
        // Validate: Must be between 8 to 128 characters

    // Criteria 2: Uppercase Charcaters
    
    // Criteria 3: Lowercase Characters

    // Criteria 4: Special Characters

    // Validate: At least 1 character type selected
        // If criteria not met, display an alert

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
