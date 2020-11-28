// Assignment Code
var generateBtn = document.querySelector("#generate");


// // Prompt user for password criteria
function getPassCriteria (){

    // Criteria 1: Length of Password
        var passLength = parseInt(
            prompt("Please choose a password length between 8 to 128 characters."));
        
        // Validate: Must be between 8 to 128 characters
        if (isNaN(passLength) === true) {
            alert("Password length must be a number from 8 to 128.");
            return;
        }

        if (passLength < 8) {
            alert("Password length must be between 8 to 128 characters.");
            return;
        }

        if (passLength > 128) {
            alert("Password length must be between 8 to 128 characters.");
            return;
        }

    // Criteria 2: Uppercase Charcaters
    var passUpper = confirm("Click OK to include uppercase letters.");

    // Criteria 3: Lowercase Characters
    var passLower = confirm("Click OK to include lowercase letters.");

    // Criteria 4: Numbersa
    var passNumbers = confirm("Click OK to include numbers.");

    // Criteria 5: Special Characters
    var passSpecial = confirm("Click OK to include special characters.");

    // Validate: At least 1 character type selected
    if (!passUpper && !passLower && !passNumbers && !passSpecial) {
            alert("Please select at least one character type to include.");
            return;
        }
            // If criteria not met, display an alert
}

// // Generate password using criteria
// function generatePassword() {
//     var passCriteria = getpassCriteria();
// }

// Write password to the #password input
function writePassword() {
    getPassCriteria();
    // var password = generatePassword();
    // var passwordText = document.querySelector("#password");

    // passwordText.value = password;
    // alert("test test");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
