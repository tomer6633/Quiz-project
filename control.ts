const dupicatedCards = [...cards, ...cards];
const shuffleArray = shuffle(dupicatedCards);

function shuffle(cards) {
  let currentIndex = cards.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [cards[currentIndex], cards[randomIndex]] = [
      cards[randomIndex],
      cards[currentIndex],
    ];
  }
  return cards;
}


function renderCard(cards:Card[],renderElenentId){



}