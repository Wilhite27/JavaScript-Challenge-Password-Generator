var characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var characters1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var characters2 = ['"0","1","2","3","4","5","6","7","8","9"'];
var characters3 = ['"!","@","#","$","%","^","&","*","(",")"'];
function randomPassword() {
  let passStore = parseInt(
    prompt('How many characters do you want in your password?')
  );
  if (isNaN(length) === true) {
    alert('Input is not valid, please input put a number');
  };
  if (length < 8) {
    alert('Password must be at least 8 characters long');
    //proceed
  };
  if (length > 128) {
    alert('Password length must be less than 128');
    return; //proceed
  };
  var regChars = confirm(
    'Please press ok for lowercase characters'
  );
  var upperChars = confirm(
    'Please press ok for uppercase characters'
  );
  var numChars = confirm(
    'Please press ok for numerical characters'
  );
  var specChars = confirm(
    'Please press ok for special characters'
  );
  //CONDITIONAL CHECK TO MAKE SURE ALL CONFIRMS HAVE BEEN MET
  if (regChars === false,
    upperChars === false,
    numChars === false,
    specChars === false
  ) {
    alert('must select at least one character option');
    // return;
  }
  var passwordSetting = {
    length: length,
    regChars: regChars,
    upperChars: upperChars,
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
  var expectedChars = [];
  //push new random special characters to our guaranteed characters upon useer input 
  if (options.characters3) {
    possibleChars = possibleChars.concat(characters3);
    expectedChars.push(getRan(characters3));
  }
  if (options.characters2) {
    possibleChars = possibleChars.concat(characters2)
    expectedChars.push(getRan(characters2));
  }
  if (options.characters1) {
    possibleChars = possibleChars.concat(characters1)
    expectedChars.push(getRan(characters1));
  }
  if (options.characters) {
    possibleChars = possibleChars.concat(characters)
    expectedChars.push(getRan(characters));
  }
  // Loop through options and password length and randomize
  for (var i = 0; i < options.length; i++) {
    var possibleChar = getRandom(possibleChars);
    result.push(possibleChar);
  }
  for (var i = 0; i < expectedChars.length; i++) {
    result[i] = expectedChars[i];
  }
  return result.join('');
}
var generateBtn = document.getElementById(generate).onclick = genPass();
// Write password to the #password input
function writePassword() {
  var password = randomPassword();
  var passwordText = window.document.querySelector("div.card-body").innerHTML("Hello World");
  passwordText.value = password;
  // return password;  
}
// for (var i = 0; i < options.length);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());