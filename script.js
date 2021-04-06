// Assignment code here

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = '~!@#$%^&*()_+{}":?><;.,';
var length = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordLength();

  function passwordLength() {
    var lengthPrompt = window.prompt(
      "Input password length (must be least 8 characters and no more than 128 characters)"
    );
    lengthInput = parseInt(lengthPrompt);
    checkInput();
  }
  // function lengthInput() {

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;

  console.log(lengthInput);
  //CHECK LENGTH
  function checkInput() {
    if (lengthInput >= 8 && lengthInput <= 128) {
      length = lengthInput;
      criteriaPrompt();
    } else {
      window.alert("Invalid input. Please try again.");
      lengthPrompt();
    }
  }

  // ADD CRITERIA
  function criteriaPrompt() {
    var addCriteria = "";
    window.alert(
      "Please select criteria to include in the password. At least one item must be selected."
    );
    var lowerConfirm = window.confirm("Include lowercase letters in password?");
    if (lowerConfirm) {
      addCriteria += lower;
      console.log(addCriteria);
    }
    var upperConfirm = window.confirm("Include uppercase letters in password?");
    if (upperConfirm) {
      addCriteria += upper;
      console.log(addCriteria);
    }
    var numbersConfirm = window.confirm("Include numbers in password?");
    if (numbersConfirm) {
      addCriteria += numbers;
      console.log(addCriteria);
    }
    var spCharConfirm = window.confirm(
      "Include special characters in password?"
    );
    if (spCharConfirm) {
      addCriteria += specialChar;
      console.log(addCriteria);
    }
    return addCriteria;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
