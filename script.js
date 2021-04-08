var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialChar = '~!@#$%^&*()_+{}":?><;.,';
var length = "";
var passwordCriteria = "";
var password = "";
var lengthInput = "";
var lowerConfirm = "";
var upperConfirm = "";
var numbersConfirm = "";
var spCharConfirm = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordLength();
  criteriaPrompt();
  checkCriteria();
  var passwordText = document.querySelector("#password");
  passwordText.value = generatePassword();
}

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
    } else {
      window.alert("Invalid input. Please try again.");
      passwordLength();
    }
  }

  // ADD CRITERIA
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
//GENERATES RANDOM CHARACTER
  function pickRandom() {
    return passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];
  }

  //LOOPS RANDOM CHARACTER FOR PASSWORD. 
  function generatePassword() {
  do {
  var passwordContainsLower = false
  var passwordContainsUpper = false
  var passwordContainsNumbers = false
  var passwordContainsSpChar = false
  password = ""
    for (var i = 0; i < length; i++) {
      var newCharacter = pickRandom();
      if (lower.includes(newCharacter)) {
        passwordContainsLower = true
      } else if(upper.includes(newCharacter)) {
        passwordContainsUpper = true
      } else if(numbers.includes(newCharacter)) {
        passwordContainsNumbers = true
      }else if(specialChar.includes(newCharacter)) {
        passwordContainsSpChar = true
      } 

      password += newCharacter;
    }
//CHECK CRITERIA SELECTIONS ARE INCLUDED IN PASSWORD
  var matchesCharcters = lowerConfirm === passwordContainsLower 
  && upperConfirm === passwordContainsUpper 
  && numbersConfirm === passwordContainsNumbers
  && spCharConfirm === passwordContainsSpChar
  } while(!matchesCharcters)
  return password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
