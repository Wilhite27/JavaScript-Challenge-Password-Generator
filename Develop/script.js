// Assignment code here
var characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()'

function create_random_string() {
var randomString = '';
  for(var i = 0; i < characters.length; i++){
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  console.log(randomString);
}
create_random_string();


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = create_random_string();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
