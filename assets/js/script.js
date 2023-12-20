// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Takes the array as an argument and returns a random element form the arrays above.
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to present a series of prompts for password criteria:
// 1. Length of password 
// 2. Inclusion of special characters
// If no characters are included it displays an alert and recursively calls 'generatePassword()
function generatePassword() {
  let length;
  do {
    length = parseInt(prompt("Enter password length between 8 and 128"));
    if (length < 8 || length > 128 || isNaN(length)) {
      alert('Please enter a number between 8 and 128');
    }
  } while (length < 8 || length > 128 || isNaN(length));

  const includeLowercase = confirm("Include lowercase characters?");
  const includeUppercase = confirm("Include uppercase characters?");
  const includeNumeric = confirm("Include numeric characters?");
  const includeSpecial = confirm("Include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert('At least one character type must be included.');
    return "generatePassword"();
  }

  let characters = [];
  let guaranteedCharacters = [];

  // Concatenates character arrays based on users choice and ensures one character from each selected type is included in the generated password 
  if (includeLowercase) {
    characters = characters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (includeUppercase) {
    characters = characters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  if (includeNumeric) {
    characters = characters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (includeSpecial) {
    characters = characters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  let finalPassword = [];

  for (let i = guaranteedCharacters.length; i < length; i++) {
    const randomChar = getRandom(characters);
    finalPassword.push(randomChar);
  }

  finalPassword = finalPassword.concat(guaranteedCharacters);
  return finalPassword.join('');
}

// Selects HTML button with the id '#generate'
// When the button is clicked it calls 'generatePassword()'
const generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', function () {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');
  passwordText.value = password;
});