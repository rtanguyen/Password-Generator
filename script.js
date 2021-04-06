var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = '~!@#$%^&*()_+{}":?><;.,';
var length = "";
var passwordCriteria = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordLength();
  criteriaPrompt();
  checkCriteria();
  generatePassword();

  //USER INPUT FUNCTION LENGTH
  function passwordLength() {
    var lengthPrompt = window.prompt(
      "Input password length (must be least 8 characters and no more than 128 characters)"
    );
    lengthInput = parseInt(lengthPrompt);
    console.log(lengthInput);
    checkInput();
  }

  //CHECK CHARACTER COUNT
  function checkInput() {
    if (lengthInput >= 8 && lengthInput <= 128) {
      length = lengthInput;
      // criteriaPrompt();
    } else {
      window.alert("Invalid input. Please try again.");
      passwordLength();
    }
  }

  // ADD CRITERIA

  var lowerConfirm = "";
  var upperConfirm = "";
  var numbersConfirm = "";
  var spCharConfirm = "";

  function criteriaPrompt() {
    var addCriteria = "";
    window.alert(
      "Please select criteria to include in the password. At least one item must be selected."
    );
    lowerConfirm = window.confirm("Include lowercase letters in password?");
    console.log(lowerConfirm);
    if (lowerConfirm) {
      addCriteria += lower;
      console.log(addCriteria);
    }
    upperConfirm = window.confirm("Include uppercase letters in password?");
    console.log(upperConfirm);
    if (upperConfirm) {
      addCriteria += upper;
      console.log(addCriteria);
    }
    numbersConfirm = window.confirm("Include numbers in password?");
    console.log(numbersConfirm);
    if (numbersConfirm) {
      addCriteria += numbers;
      console.log(addCriteria);
    }
    spCharConfirm = window.confirm("Include special characters in password?");
    console.log(spCharConfirm);
    if (spCharConfirm) {
      addCriteria += specialChar;
      console.log(addCriteria);
    }
    passwordCriteria = addCriteria;
  }

  // CHECK CRITERIA SELECTION
  function checkCriteria() {
    if (
      lowerConfirm === true ||
      upperConfirm === true ||
      numbersConfirm === true ||
      spCharConfirm === true
    ) {
      pickRandom();
    } else {
      window.alert("At least one criteria must be selected. Please try again");
      criteriaPrompt();
    }
  }
  // // GENERATE PASSWORD
  function pickRandom() {
    return passwordCriteria(
      Math.floor(Math.random() * passwordCriteria.length)
    );
  }

  //LOOP FOR PASSWORD
  function generatePassword() {
    for (var i = 0; i < length; i++) {
      pickRandom();
      password += generatePassword();
    }
  }
  var password = "";
  console.log(password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
