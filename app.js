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

// Keeps track of the index number generated
let randomMemory = [];

const getWord = () => {

  // Generate index number from werkwoordenList array
  let werkwoordChoice = Math.floor(Math.random() * werkwoordenList.length );

  // Adds index value to memory array
  randomMemory.push(werkwoordChoice);

  // Takes the random index number generated and uses it to select a word & set header
  werkwoordHeader.innerHTML = `Werkwoord: ${werkwoordenList[werkwoordChoice].wijtt} <span class="help">(${werkwoordenList[werkwoordChoice].engels})</span>`;

}

const compareAnswer = () => {

  // To check TT fields
  if ( iktt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].iktt ) {
    iktt.classList.add("correct");
    iktt.classList.remove("wrong");
    // iktt.value += "  ✓";
  } else {
    iktt.classList.add("wrong");
    iktt.classList.remove("correct");
    // iktt.value += "  ✗";
  }

  if ( jijtt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].jijtt ) {
    jijtt.classList.add("correct");
    jijtt.classList.remove("wrong");
    // jijtt.value += "  ✓";
  } else {
    jijtt.classList.add("wrong");
    jijtt.classList.remove("correct");
    // jijtt.value += "  ✗";
  }

  if ( hijtt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].hijtt ) {
    hijtt.classList.add("correct");
    hijtt.classList.remove("wrong");
    // hijtt.value += "  ✓";
  } else {
    hijtt.classList.add("wrong");
    hijtt.classList.remove("correct");
    // hijtt.value += "  ✗";
  }

  if ( wijtt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].wijtt ) {
    wijtt.classList.add("correct");
    wijtt.classList.remove("wrong");
    // wijtt.value += "  ✓";
  } else {
    wijtt.classList.add("wrong");
    wijtt.classList.remove("correct");
    // wijtt.value += "  ✗";
  }

  // To check OVT fields
  if ( ikovt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].ikovt ) {
    ikovt.classList.add("correct");
    ikovt.classList.remove("wrong");
    // ikovt.value += "  ✓";
  } else {
    ikovt.classList.add("wrong");
    ikovt.classList.remove("correct");
    // ikovt.value += "  ✗";
  }

  if ( jijovt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].jijovt ) {
    jijovt.classList.add("correct");
    jijovt.classList.remove("wrong");
    // jijovt.value += "  ✓";
  } else {
    jijovt.classList.add("wrong");
    jijovt.classList.remove("correct");
    // jijovt.value += "  ✗";
  }

  if ( hijovt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].hijovt ) {
    hijovt.classList.add("correct");
    hijovt.classList.remove("wrong");
    // hijovt.value += "  ✓";
  } else {
    hijovt.classList.add("wrong");
    hijovt.classList.remove("correct");
    // hijovt.value += "  ✗";
  }

  if ( wijovt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].wijovt ) {
    wijovt.classList.add("correct");
    wijovt.classList.remove("wrong");
    // wijovt.value += "  ✓";
  } else {
    wijovt.classList.add("wrong");
    wijovt.classList.remove("correct");
    // wijovt.value += "  ✗";
  }

  // To check VTT fields
  if ( ikvtt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].ikvtt ) {
    ikvtt.classList.add("correct");
    ikvtt.classList.remove("wrong");
    // ikvtt.value += "  ✓";
  } else {
    ikvtt.classList.add("wrong");
    ikvtt.classList.remove("correct");
    // ikvtt.value += "  ✗";
  }

  if ( jijvtt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].jijvtt ) {
    jijvtt.classList.add("correct");
    jijvtt.classList.remove("wrong");
    // jijvtt.value += "  ✓";
  } else {
    jijvtt.classList.add("wrong");
    jijvtt.classList.remove("correct");
    // jijvtt.value += "  ✗";
  }

  if ( hijvtt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].hijvtt ) {
    hijvtt.classList.add("correct");
    hijvtt.classList.remove("wrong");
    // hijvtt.value += "  ✓";
  } else {
    hijvtt.classList.add("wrong");
    hijvtt.classList.remove("correct");
    // hijvtt.value += "  ✗";
  }

  if ( wijvtt.value.toLowerCase() === werkwoordenList[randomMemory[randomMemory.length -1]].wijvtt ) {
    wijvtt.classList.add("correct");
    wijvtt.classList.remove("wrong");
    // wijvtt.value += "  ✓";
  } else {
    wijvtt.classList.add("wrong");
    wijvtt.classList.remove("correct");
    // wijvtt.value += "  ✗";
  }

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

  });

});

// Listens to answerButton
answerButton.addEventListener('click', () => {

  // Calls the compareAnswer function 
  compareAnswer();

});

// window.addEventListener('load', () => {

//   werkwoord = Math.floor(Math.random() * werkwoordenList.length );
//   console.log(werkwoord);

// });

// Allows user to submit answer on enter as opposed to having to press the button each time
wordInput.forEach(item => {

  item.addEventListener("keyup", () => {

    // Keycode 13 is the enter key
    if (event.keyCode === 13) {
      answerButton.click();
    }
  
  });

})

helpButton.addEventListener('click', () => {

  wordInput.forEach(item => {

    test = item.dataset.form;
    item.value = test;

  });

})
