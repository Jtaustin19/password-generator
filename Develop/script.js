/* User prompts */
var howlong = window.prompt("How long would you like your password to be?")
while (howlong < 8 || howlong > 128) {
    howlong = window.prompt("This generator will create passwords no shorter than 8 characters long and no longer than 128 characters. How long would you like your password to be?");
};

var lowercaseConfirm = window.confirm("Does your password contain any lowercase letters?");
var uppercaseConfirm = window.confirm("Does your password contain any uppercase letters?");
var numbersConfirm = window.confirm("Does your password contain any numerics?");
var symbolsConfirm = window.confirm("Does your password contain any symbols/special characters?");

while (!(lowercaseConfirm || uppercaseConfirm || numbersConfirm || symbolsConfirm)) {
    window.alert("You must select at least one of each character type!");
    lowercaseConfirm = window.confirm("Does your password contain any lowercase letters?");
    uppercaseConfirm = window.confirm("Does your password contain any uppercase letters?");
    numbersConfirm = window.confirm("Does your password contain any numerics?");
    symbolsConfirm = window.confirm("Does your password contain any symbols/special characters?");
};
/* User prompts end */

function generatePassword() {
    var newPassword = "";
    var allowed = [];

    while (newPassword.length < howlong) {
        if (lowercaseConfirm) {
            newPassword += getRandomLower(allowed.lowercaseConfirm);
        }
        if (newPassword.length >= howlong) break;
        if (uppercaseConfirm) {
            newPassword += getRandomUpper(allowed.uppercaseConfirm);
        }
        if (newPassword.length >= howlong) break;
        if (numbersConfirm) {
            newPassword += getRandomNumber(allowed.numbersConfirm);
        }
        if (newPassword.length >= howlong) break;
        if (symbolsConfirm) {
            newPassword += getRandomSymbol(allowed.symbolsConfirm);
        }
    }

    return newPassword;
};

/* Generator functions */
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
function getRandomNumber() {
    return Math.floor(Math.random() * 9);
};
function getRandomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
};
/* Generator functions end */
// all chracter code from: https://net-coder.com/charset.html
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);