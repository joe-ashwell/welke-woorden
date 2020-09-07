const modalList = document.querySelector('ul.woorden-lijst-modal');
const irregularList = document.querySelector('ul.woorden-lijst-irregular');
const regularList = document.querySelector('ul.woorden-lijst-regular');

werkwoordenList.forEach(verb => {

  const liItem = document.createElement('li');

  liItem.innerHTML = `${verb.infin} (${verb.engels})`;

  if ( verb.type === "modal" ) {

    modalList.appendChild(liItem);

  } else if ( verb.type === "irregular" ) {

    irregularList.appendChild(liItem);

  } else {

    regularList.appendChild(liItem);

  }

});