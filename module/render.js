import { randomPassword } from './passwords.js';

// create an array to store the generated passwords (Master list)
export let generatedPasswords = [];

// target button
let button = document.querySelector('button');

let numberOfPassInput = document.querySelector('#number-of-pass');

button.addEventListener('click', () => {
  // set password array to empty
  generatedPasswords = [];
  let passwordEl = document.getElementById('passwords');
  //   clear the passwords DOM content
  passwordEl.textContent = '';

  if (numberOfPassInput.value == 0) {
    for (let j = 1; j <= 4; j++) {
      generatedPasswords.push(randomPassword());
    }
  }
  // repeat random password as many times as you would like
  for (let times = 1; times <= numberOfPassInput.value; times++) {
    if (numberOfPassInput.value > 10) {
      break;
    }

    generatedPasswords.push(randomPassword());
  }
  console.log('Your passwords are:', generatedPasswords);
  // display the passwords in the dom

  // select the passwords id
  // append a section for the passwords
  // loop through the array
  generatedPasswords.forEach((item, index) => {
    let pass = item;
    // create a div for the passwords
    let section = document.createElement('section');
    section.setAttribute('id', 'password-' + (index + 1));
    passwordEl.append(section);
    section.textContent = pass;



    let randomPasswordEl = document.getElementById('password-' + (index + 1))

    // randomPasswordEl.append(copyButton)

    let copyButton = document.createElement('button')
    copyButton.classList.add('copy-button')
    copyButton.textContent = 'Press to Copy'
    randomPasswordEl.append(copyButton)

    copyButton.addEventListener('click', () => {
      // research more about this
       navigator.clipboard.writeText(pass)
       copyButton.textContent = 'Password Copied!'
    })
    
  });
});

//   copyText.select();


