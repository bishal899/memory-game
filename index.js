const cardArray = [
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);
const gridEl = document.getElementById("grid");
const scoreEl = document.getElementById("score");
const buttonEl = document.getElementById("btn");
let chosenCard = [];
let chosenCardId = [];
let cardWon = [];

function createBoard() {
  cardArray.forEach((item, cardId) => {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", cardId);
    gridEl.appendChild(card);
    card.addEventListener("click", flipcard);
  });
}

createBoard();

function checkForMatch() {
  const card = document.querySelectorAll("img")
  if (chosenCardId[0] == chosenCardId[1]) {
    card[chosenCardId[0]].setAttribute("src", "images/blank.png");
    card[chosenCardId[1]].setAttribute("src", "images/blank.png");
  }
  else if (chosenCard[0] === chosenCard[1]) {
    console.log("You found a match");
    card[chosenCardId[0]].setAttribute("src", "images/white.png");
    card[chosenCardId[1]].setAttribute("src", "images/white.png");
    card[chosenCardId[0]].removeEventListener("click", flipcard);
    card[chosenCardId[1]].removeEventListener("click", flipcard);
    cardWon.push(chosenCard)
  } else {
    console.log("Try Again");
    card[chosenCardId[0]].setAttribute("src", "images/blank.png");
    card[chosenCardId[1]].setAttribute("src", "images/blank.png")
  }

  scoreEl.textContent = cardWon.length
  chosenCard = [];
  chosenCardId = [];

  if (cardWon.length === cardArray.length/2) {
    scoreEl.textContent = "Congratulations! You found them all."
  }
}

function flipcard() {
  const cardId = this.getAttribute("data-id");
  chosenCard.push(cardArray[cardId].name);
  chosenCardId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (chosenCard.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}


