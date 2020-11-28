// Define arrays of characters for passwords
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "."];


// Prompt user for password criteria
function getPassCriteria (){

    // Criteria 1: Length of Password
        var passLength = parseInt(
            prompt("Please choose a password length between 8 to 128 characters."));
            console.log("Password length: " + passLength);
        
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
    console.log("Uppercase: " + passUpper);

    // Criteria 3: Lowercase Characters
    var passLower = confirm("Click OK to include lowercase letters.");
    console.log("Lowercase: " + passLower);

    // Criteria 4: Numbersa
    var passNumbers = confirm("Click OK to include numbers.");
    console.log("Numbers: " + passNumbers);

    // Criteria 5: Special Characters
    var passSpecial = confirm("Click OK to include special characters.");
    console.log("Special chars: " + passSpecial);

    // Validate: At least 1 character type selected
    if (!passUpper && !passLower && !passNumbers && !passSpecial) {
            // If criteria not met, display an alert
            alert("Please select at least one character type to include.");
            return;
        }


// Store user input in an object
var passCriteria = {
    legnth: passLength,
    uppercaseChars: passUpper,
    lowercaseChars: passLower,
    numberChars: passNumbers,
    specialChars: passSpecial
};
    console.log("passCriteria saved contents: " + passCriteria);

    // return passCriteria;
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

// Point to Generate Button in DOM
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
