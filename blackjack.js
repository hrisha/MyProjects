let sum = document.querySelector(".sum");
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let card = [firstCard, secondCard];
let addNum = firstCard + secondCard;
let start = (document.querySelector(".start").onclick = function () {
  document.querySelector(".card").innerHTML = `Card: ${card.join(" ")}`;
  sum.innerHTML = `Sum: ${addNum}`;
  if (addNum <= 20) {
    document.querySelector(".title").innerHTML =
      "Do you want to draw a new card?";
  } else if (addNum === 21) {
    document.querySelector(".title").innerHTML = "Congratulations ! You've got Blackjack!";
  } else {
    document.querySelector(".title").innerHTML = "You are loss";
  }
  let newCard = document.querySelector(".new");
  newCard.onclick = function () {
    if ((addNum < 21) & (card.length >= 2)) {
      let cardNew = getRandomCard();
      addNum += cardNew;
      sum.innerHTML = `Sum: ${addNum}`;
      card.push(cardNew);
      start();
    }
  };
});

function getRandomCard() {
  let random = Math.ceil(Math.random() * 10);
  if (random === 1) {
    return 11;
  } else {
    return random;
  }
}

document.querySelector(".try").onclick = function () {
  window.location.reload();
};
