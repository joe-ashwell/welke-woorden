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

// Keeps track of the index number generated
let randomMemory = [];

const getWord = () => {

  // Generate index number from werkwoordenList array
  let werkwoordChoice = Math.floor(Math.random() * werkwoordenList.length );

  // Adds index value to memory array
  randomMemory.push(werkwoordChoice);

  // Takes the random index number generated and uses it to select a word & set header
  werkwoordHeader.innerHTML = `Werkwoord: ${werkwoordenList[werkwoordChoice].wijtt} <span class="help">(${werkwoordenList[werkwoordChoice].engels})</span>`;

  console.log(randomMemory);

}

const compareAnswer = () => {

  // To check TT fields
  if ( iktt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].iktt ) {
    iktt.classList.add("correct");
    iktt.classList.remove("wrong");
    iktt.value += "  ✓"
  } else {
    iktt.classList.add("wrong");
    iktt.classList.remove("correct");
    iktt.value += "  ✗"
  }

  if ( jijtt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].jijtt ) {
    console.log('yeeew');
  } else {
    console.log("fout");
  }

  if ( hijtt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].hijtt ) {
    console.log('yeeew');
  } else {
    console.log("fout");
  }

  if ( wijtt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].wijtt ) {
    console.log('yeeew');
  } else {
    console.log("fout");
  }

  // To check OVT fields
  if ( ikovt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].ikovt ) {
    console.log('yeeew');
  } else {
    console.log("fout");
  }

  if ( jijovt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].jijovt ) {
    console.log('yeeew');
  } else {
    console.log("fout");
  }

  if ( hijovt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].hijovt ) {
    console.log('yeeew');
  } else {
    console.log("fout");
  }

  if ( wijovt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].wijovt ) {
    console.log('yeeew');
  } else {
    console.log("fout");
  }

  // To check VTT fields
  if ( ikvtt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].ikvtt ) {
    console.log('yeeew');
  } else {
    console.log("fout");
  }

  if ( jijvtt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].jijvtt ) {
    console.log('yeeew');
  } else {
    console.log("fout");
  }

  if ( hijvtt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].hijvtt ) {
    console.log('yeeew');
  } else {
    console.log("fout");
  }

  if ( wijvtt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].wijvtt ) {
    console.log('yeeew');
  } else {
    console.log("fout");
  }

}

// Calls the getWord function on load
window.addEventListener('load', () => {

  getWord();

});

// Calls the getWord function on newButton press
newButton.addEventListener('click', () => {

  getWord();

});

// Calls the compareAnswer function on answerButton press
answerButton.addEventListener('click', () => {

  compareAnswer();

});

// window.addEventListener('load', () => {

//   werkwoord = Math.floor(Math.random() * werkwoordenList.length );
//   console.log(werkwoord);

// });


