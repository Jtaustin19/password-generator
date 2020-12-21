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