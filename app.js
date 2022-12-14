  // type of cards



// set event listener

document.addEventListener('DOMContentLoaded', function() {
    
  const cards = [
    {
      name: 'chesse burger',
      img: 'asset/img/cheeseburger.png',
    },
    {
      name: 'chesse burger',
      img: 'asset/img/cheeseburger.png',
    },
    {
      name: 'fries',
      img: 'asset/img/fries.png',
    },
    {
      name: 'fries',
      img: 'asset/img/fries.png',
    },
    {
      name: 'hotdog',
      img: 'asset/img/hotdog.png',
    },
    {
      name: 'hotdog',
      img: 'asset/img/hotdog.png',
    },
    {
      name: 'ice-cream',
      img: 'asset/img/ice-cream.png',
    },
    {
      name: 'ice-cream',
      img: 'asset/img/ice-cream.png',
    },
    {
      name: 'milkshake',
      img: 'asset/img/milkshake.png',
    },
    {
      name: 'milkshake',
      img: 'asset/img/milkshake.png',
    },
    {
      name: 'pizza',
      img: 'asset/img/pizza.png',
    },
    {
      name: 'pizza',
      img: 'asset/img/pizza.png',
    },
  ]
  .sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  let cardChosen = [];
  let cardChosenId = [];
  let cardFound = [];
  const result = document.getElementById('result');
  const container = document.querySelector('.container')


  // create Board
  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'asset/img/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  };

  // check for matches
  function checkForMatch (){
    let allCards = document.querySelectorAll('img');
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];
    if (cardChosen[0] === cardChosen[1]) {
      // alert('You find a match');
      allCards[optionOneId].setAttribute('src', 'asset/img/white.png');
      allCards[optionTwoId].setAttribute('src', 'asset/img/white.png');
      allCards[optionOneId].removeEventListener('click', flipCard)
      allCards[optionTwoId].removeEventListener('click', flipCard)
      cardFound.push(cardChosen);
    } else {
      allCards[optionOneId].setAttribute('src', 'asset/img/blank.png');
      allCards[optionTwoId].setAttribute('src', 'asset/img/blank.png');
      // alert('try again');
    };
    cardChosen = [];
    cardChosenId = [];
    result.textContent = cardFound.length;
    if(cardFound.length === cards.length/2) {
      result.textContent = 'Congrantulations, you found all the matches 🎊';
      const resetBtn = document.createElement('button');
      resetBtn.setAttribute('id', 'resetBtn');
      resetBtn.textContent = 'Start again'
      container.appendChild(resetBtn);
      document.addEventListener('click', (event) => {
        if(event.target.id === 'resetBtn') startAgain();
      })
     }
  }
  
  // add event listener

  // flip the card

  function flipCard () {
    var cardId = this.getAttribute('data-id');
    cardChosen.push(cards[cardId].name);
    cardChosenId.push(cardId);
    this.setAttribute('src', cards[cardId].img);
    if (cardChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  // start again 
  function startAgain () {
    result.textContent = '';

    for (let i = 0; i < cards.length; i++) {
      var cardsToStart = document.querySelectorAll('img');
      cardsToStart[i].setAttribute('src', 'asset/img/blank.png');
      cardsToStart[i].addEventListener('click', flipCard);
    }
    cardFound = [];
    container.removeChild(resetBtn);
  }

  createBoard();
})