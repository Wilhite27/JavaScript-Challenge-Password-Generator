// Assignment code here
var characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var characters1 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var characters2 = ['"0","1","2","3","4","5","6","7","8","9"'];
var characters3 = ['"!","@","#","$","%","^","&","*","(",")"'];

function randomPassword() {
  let passStore = parseInt(
    prompt('How long is your password?')
  );
  if (isNaN(length === true)) {
    alert('Input is not valid, please put put a number');
    return;
  };

  if (length < 8) {
    alert('Password must be 8 chars long');
    return;//proceed
  };
  if (length > 128) {
    alert('Password length must be less than 128');
    return; //proceed
  };

  var regChars = confirm(
    'Please press ok for lowercase'
  );
  var upperChars = confirm(
    'Please press ok for uppercase'
  );
  var numChars = confirm(
    'Please press ok for numbers'
  );
  var specChars = confirm(
    'Please press ok for special characters'
  );
//CONDITIONAL CHECK TO MAKE SURE ALL CONFIRMS HAVE BEEN MET
if(regChars === false,
upperChars === false,
numChars === false,
specChars === false
) {
  alert('must select atleast one character option');
  return;
}
var passwordSetting = {
  length: length,
  regChars : regChars,
  uppersChars: uppersChars,
  numChars: numChars,
  specChars: specChars
};
return passwordSetting;
}
function getRan(arr) {
  var ranIndex = Math.floor(Math.random() * arr.length);
  var ranElement = arr[ranIndex];
  return ranElement;
}

function genPass() {
  var options = randomPassword();

  var result = [];
  
  var possibleChars = [];

  var guaranteedChars = [];

  //push new random special characters to our guaranteed characters upon useer input 
  if (options.characters3) {
    possibleChars = possibleChars.concat(characters3);
    guaranteedChars.push(getRandom(characters3));
  }

  if (options.characters2) {
    possibleChars = possibleChars.concat(characters2)
    guaranteedChars.push(getRan(characters2));
  } 
  if (options.characters2) {
    possibleChars = possibleChars.concat(characters1)
    guaranteedChars.push(getRan(characters1));
  } 
  if (options.characters2) {
    possibleChars = possibleChars.concat(characters)
    guaranteedChars.push(getRan(characters));
  } 
// Loop through options and password length and randomize
  for (var i = 0; i < options.length; i++) {
    var possibleChar = getRandom(possibleChars);

    result.push(possibleChar);
  }
}



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
for (var i = 0; i < options.length;)
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
