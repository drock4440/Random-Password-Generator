// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowCharacters = "abcdefghijklmnopqrstuvwxyz"
const nums = "1234567890"
const special = "!@#$%^&*()_+=-]["
const upCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// These splits will seperate the individual characters in each array above

lowCharacters.split;
nums.split;
special.split;
upCharacters.split;

// this is the function to generate a random password based off of my criteria
function generatePassword(){
      // prompts my user to put a number between 8-128
      length = prompt("How long would you like your password to be? It must be between 8 and 128 characters.");
      if (length < 8 || length > 128) {
            // if they enter anything outside of my range, it will send this aler and the function wont execute
            alert("Yo, we said it had to be within 8-128 Characters")
                  return;
      }
// these are the prompts displayed to determine what characters the user wants to use
      uppCase = confirm("Would you like to use upper case letters?")
      lowCase = confirm("Would you like to use lower case letters?")
      useNums = confirm("Would you like to use numbers?")
      specCharacters = confirm("Would you like to use special characters?")
// Based off of the users' answers, the following code will create an array of characters for my generator to chose from
      if (uppCase && lowCase && useNums && specCharacters) { 
            selection = upCharacters.concat(lowCharacters, nums, special);
      }    
      else if (uppCase && !lowCase && useNums && specCharacters) {
            selection = upCharacters.concat(nums, special);
      }
      else if (uppCase && lowCase && !useNums && specCharacters) {
            selection = upCharacters.concat(lowCharacters, special); 
      }
      else if (uppCase && lowCase && useNums && !specCharacters) {
            selection = upCharacters.concat(lowCharacters, nums); 
      } 
      else if(!uppCase && lowCase && useNums && specCharacters){
            selection = lowCharacters.concat(nums, special);
      }
      else if (uppCase && specCharacters) {
            selection = upCharacters.concat(special);
      }
      else if (uppCase && useNums) {
            selection = upCharacters.concat(nums);
      }
      else if (uppCase && lowCase) {
            selection = upCharacters.concatI(lowCharacters);
      }
      else if (lowCase && specCharacters) {
            selection = lowCharacters.concat(special);
      }
      else if (lowCase && useNums) {
            selection = lowCharacters.concat(nums);
      } 
      else if (uppCase) {
            selection = upCharacters;
      }
      else if (lowCase) {
            selection = lowCharacters;
      }
      else if (useNums) {
            selection = nums;
      }
      else if (specCharacters) {
            selection = special;
      }
// this will generate a blank string that the password will be added to
      let choicesMade = "";
// Here is my equation that will generate a random set of characters based upon the given array the user selected 
      for (var i = 0; i < length; i++) {
             choicesMade = choicesMade + selection[Math.floor(Math.random() * selection.length)];
            console.log()
// This will take the blank string mentionoed before, and add the new generated password to that string
      } return choicesMade;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
