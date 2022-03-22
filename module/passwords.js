let password = {
  // have an array of possible characters in a password
  characters: [
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
  ],
  // have a password length minimum
  minLength: 10,
};
// randomly pull characters from the possible characters and make 4 types of passwords and push them into their on array
export function randomPassword() {
  // create an array to hold the created passwords to be pushed into the master list
  let newPasswords = [];

  // loop through the miniLength of the password to make the password
  for (let i = 0; i < password.minLength; i++) {
    // create and random character by picking a random number based off the passwords.character
    let randomChar = Math.floor(Math.random() * password.characters.length);

    // push the characters into a new array
    newPasswords.push(password.characters[randomChar]);
  }
  // join the characters to make a complete password
  newPasswords = newPasswords.join('');
  // push the complete password into the generated passwords array

  // return the values of newPasswords
  return newPasswords;
}
