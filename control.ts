const dupicatedCards = [...cards, ...cards];
const shuffleArray = shuffle(dupicatedCards);

function shuffle(cards) {
  let currentIndex = cards.length,randomIndex;

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


function renderCards(cards:Card[],renderElementId):void{
  try {   
      if(!cards|| !Array.isArray(cards))
      throw new Error(`cards is not an array`)
      const htmlCard= cards
      .map((cards)=>{
          return`
          <div class="cards">
          <div><img src="${cards.PictureURL}" alt=""></div>
      </div>
          `

      })
      .join(` `)
      const element = document.querySelector(`#${renderElementId}`);
      if(!element) throw new Error(`couldent find element `)
      element.innerHTML=htmlCard;
  } catch (error) {
      console.error(error)
  }
}

