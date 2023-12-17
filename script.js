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


function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomElement = arr[randomIndex];
  return randomElement;
}

function generatePassword() {
  const options = getPasswordOptions();

 
  let finalPassword = [];


  if (options.includeLowercase) {
    characters = characters.concat(lowerCasedCharacters);
  }

  if (options.includeUppercase) {
    characters = characters.concat(upperCasedCharacters);
  }

  if (options.includeNumeric) {
    characters = characters.concat(numericCharacters);
  }

  if (options.includeSpecial) {
    characters = characters.concat(specialCharacters);
  }


  for (let i = 0; i < options.length; i++) {
    const randomChar = getRandom(characters);
    finalPassword.push(randomChar);
  }


  return finalPassword.join('');
}


const generateBtn = document.querySelector('#generate');

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}


generateBtn.addEventListener('click', writePassword);
