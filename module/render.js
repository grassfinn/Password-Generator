import { randomPassword } from './passwords.js';

// create an array to store the generated passwords (Master list)
export let generatedPasswords = [];

// target button
let button = document.querySelector('button');

let numberOfPassInput = document.querySelector('#number-of-pass');

button.addEventListener('click', () => {
  // set password array to empty
  generatedPasswords = [];
  let passwordEl = document.getElementById('passwords-container');
  //   clear the passwords DOM content
  passwordEl.textContent = '';

  if (numberOfPassInput.value == 0) {
    for (let j = 1; j <= 4; j++) {
      generatedPasswords.push(randomPassword());
    }
  }
  // repeat random password as many times as you would like
  for (let times = 1; times <= numberOfPassInput.value; times++) {
    if (numberOfPassInput.value > 9) {
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
    section.classList.add('random-pass')
    // section.style.width ='223px'
    // section.style.height ='42px'
    passwordEl.append(section);

    let span = document.createElement('span')
    section.append(span)
    span.classList.add('password')
    span.textContent = pass 

    let randomPasswordEl = document.getElementById('password-' + (index + 1));

    // randomPasswordEl.append(copyButton)

    // create the copy button
    let copyButton = document.createElement('button');
    // add class as 'copy-button'
    copyButton.classList.add('copy-button');
    // change text of button
    copyButton.textContent = 'Press to Copy';
    // append button
    randomPasswordEl.append(copyButton);

    // loop through the buttons and copy the text when clipped

    // 
    let resetText = () => {
      copyButton.textContent = 'Press to Copy'
    }

    let copyText = () => {
      // https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

      // research more about this
      navigator.clipboard.writeText(pass);
      copyButton.textContent = 'Copied!';
      setTimeout(resetText,2000)
    }

    copyButton.addEventListener('click', () => copyText() 
    );

  });
});
