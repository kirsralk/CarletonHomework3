// Assignment Code
var generateBtn = document.querySelector("#generate");


// // Prompt user for password criteria
function getPassCriteria (){
    // alert("test test 2")

    // // Criteria 1: Length of Password
    //     // Validate: Must be between 8 to 128 characters
    var passLength = prompt("Please choose a password length between 8 to 128 characters.");

    // // Criteria 2: Uppercase Charcaters
    var passUpper = confirm("Click OK to include uppercase letters.");

    // // Criteria 3: Lowercase Characters
    var passLower = confirm("Click OK to include lowercase letters.");

    // // Criteria 4: Special Characters
    var passSpecial = confirm("Click OK to include special characters.");

    // // Validate: At least 1 character type selected
    //     // If criteria not met, display an alert
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
