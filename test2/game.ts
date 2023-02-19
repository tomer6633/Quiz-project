class Card {

  constructor(
    public cardName: string,
    public PictureURL: string,
  ) {
    // this.uid = uid();
  }
}

const cards:Card[]=[];

cards.push(new Card("A","data:image/jpeg;base64,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"))
cards.push(new Card("B","data:image/jpeg;base64,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"))
cards.push(new Card("C","data:image/jpeg;base64,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"))

let possibleCards = cards.concat(cards);

document.querySelectorAll('.card').forEach(cards => {
    cards.addEventListener('click', () => {
      cards.classList.toggle('flipped');
    });
  });
  
  function renderCards(cards:Card[]):void{
    try {   
      
        if(!cards|| !Array.isArray(cards))
        throw new Error(`cards is not an array`)
        const htmlCard= cards
        .map((cards)=>{
            return`
            <div >
            <img src="${cards.PictureURL}" alt="">
          </div>
            `
        })
        .join(` `)
        const element = document.querySelector(`.back`);
        if(!element) throw new Error(`couldent find element `)
        element.innerHTML=htmlCard;
    } catch (error) {
        console.error(error)
    }

  }
  renderCards(cards)

console.log(cards)