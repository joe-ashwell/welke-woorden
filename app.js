// Targets the header question
const werkwoordHeader = document.querySelector('h1.werkwoord');

// Targets the TT verb forms
const iktt = document.querySelector('input[data-form="ik-tt"]');
const jijtt = document.querySelector('input[data-form="jij-tt"]');
const hijtt = document.querySelector('input[data-form="hij-tt"]');
const wijtt = document.querySelector('input[data-form="wij-tt"]');

// Targets the OVT verb forms
const ikovt = document.querySelector('input[data-form="ik-ovt"]');
const jijovt = document.querySelector('input[data-form="jij-ovt"]');
const hijovt = document.querySelector('input[data-form="hij-ovt"]');
const wijovt = document.querySelector('input[data-form="wij-ovt"]');

// Targets the VTT verb forms
const ikvtt = document.querySelector('input[data-form="ik-vtt"]');
const jijvtt = document.querySelector('input[data-form="jij-vtt"]');
const hijvtt = document.querySelector('input[data-form="hij-vtt"]');
const wijvtt = document.querySelector('input[data-form="wij-vtt"]');

// Targets the buttons
const newButton = document.querySelector('.newButton');
const answerButton = document.querySelector('.answerButton');

// Keeps track of the index number generated
let randomMemory = [];

// Function to generate random index number and fetch new word
const getWord = () => {

  // Generate index number from werkwoordenList array
  let werkwoordChoice = Math.floor(Math.random() * werkwoordenList.length );

  // Adds index value to memory array
  randomMemory.push(werkwoordChoice);

  // Takes the random index number generated and uses it to select a word
  werkwoordHeader.innerHTML = `Werkwoord: ${werkwoordenList[werkwoordChoice].wijtt} <span class="help">(${werkwoordenList[werkwoordChoice].engels})</span>`;

}

// Calls the getWord function on load
window.addEventListener('load', () => {

  getWord();

});

// Calls the getWord function on newButton press
newButton.addEventListener('click', () => {

  getWord();

});

// window.addEventListener('load', () => {

//   werkwoord = Math.floor(Math.random() * werkwoordenList.length );
//   console.log(werkwoord);

// });


