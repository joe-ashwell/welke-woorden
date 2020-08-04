// Targets the header question
const werkwoordHeader = document.querySelector('h1.werkwoord');

// Targets the TT verb forms
const iktt = document.querySelector('input[data-form="iktt"]');
const jijtt = document.querySelector('input[data-form="jijtt"]');
const hijtt = document.querySelector('input[data-form="hijtt"]');
const wijtt = document.querySelector('input[data-form="wijtt"]');

// Targets the OVT verb forms
const ikovt = document.querySelector('input[data-form="ikovt"]');
const jijovt = document.querySelector('input[data-form="jijovt"]');
const hijovt = document.querySelector('input[data-form="hijovt"]');
const wijovt = document.querySelector('input[data-form="wijovt"]');

// Targets the VTT verb forms
const ikvtt = document.querySelector('input[data-form="ikvtt"]');
const jijvtt = document.querySelector('input[data-form="jijvtt"]');
const hijvtt = document.querySelector('input[data-form="hijvtt"]');
const wijvtt = document.querySelector('input[data-form="wijvtt"]');

// Targets all input fields
const wordInput = document.querySelectorAll('.wordInput');

// Targets the buttons
const newButton = document.querySelector('.newButton');
const answerButton = document.querySelector('.answerButton');
const helpButton = document.querySelector('.helpButton');
const clearButton = document.querySelector('.clearButton');

// Keeps track of the index number generated
let randomMemory = [];

const getWord = () => {

  // Generate index number from werkwoordenList array
  let werkwoordChoice = Math.floor(Math.random() * werkwoordenList.length );

  // Adds index value to memory array
  randomMemory.push(werkwoordChoice);

  // Takes the random index number generated and uses it to select a word & set header
  werkwoordHeader.innerHTML = `Werkwoord: ${werkwoordenList[werkwoordChoice].infin} <span class="help">(${werkwoordenList[werkwoordChoice].engels})</span>`;

}

const compareAnswer = () => {


  wordInput.forEach(item => {

    // Need to target the index value of that random word generation
    const index = randomMemory[randomMemory.length - 1];
    // Gets the key using the data-* attribute in the HTML
    const key = item.dataset.form;

    // Compares input value against the correct answer
    
    if ( item.value === werkwoordenList[index][key]  ) {
      item.classList.add("correct");
      item.classList.remove("wrong");
    } else {
      item.classList.add("wrong");
      item.classList.remove("correct");
    }

    });

}

// Calls the getWord function on load
window.addEventListener('load', () => {

  getWord();

});

// Listens to newButton
newButton.addEventListener('click', () => {

  // Calls the getWord function on newButton press
  getWord();

  // Also clears previous styling and input
  wordInput.forEach(item => {

    item.value = "";
    item.classList.remove("wrong");
    item.classList.remove("correct");
    item.classList.remove("showAnswer");

  });

});

// Listens to answerButton
answerButton.addEventListener('click', () => {

  // Calls the compareAnswer function 
  compareAnswer();

});

clearButton.addEventListener('click', () => {

  wordInput.forEach(item => {

    item.value = "";
    item.classList.remove("wrong");
    item.classList.remove("correct");
    item.classList.remove("showAnswer");

  });

});

// Allows user to submit answer on enter as opposed to having to press the button each time
wordInput.forEach(item => {

  item.addEventListener("keyup", () => {

    // Keycode 13 is the enter key
    if (event.keyCode === 13) {
      answerButton.click();
    }
  
  });

});

// Targets help button to show answers to help users
helpButton.addEventListener('click', () => {

  wordInput.forEach(item => {

    // Need to target the index value of that random word generation
    const index = randomMemory[randomMemory.length - 1];
    // Gets the key using the data-* attribute in the HTML
    const key = item.dataset.form;
    // Puts them together to get every value of each input
    item.value = werkwoordenList[index][key] 
    item.classList.add("showAnswer");
    item.classList.remove("wrong");
    item.classList.remove("correct");

    });

});



