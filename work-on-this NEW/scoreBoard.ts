renderScoreBoard(getPlayersFromStorage())

function renderScoreBoard(players:Player[]){
    try {
        if (!players || !Array.isArray(players)) throw new Error("players is not an array");
        const page=players.map((player) => {
                return `<div class="line" >
                <img class="small_logo" src='${player.file}'/>
                <div>${player.name} </div>
                <div>${player.score} </div>
                </div>`
               }).join(" ");

               const html: HTMLDivElement | null = document.querySelector(".scoreBoard");
               if (html !== null) {
                 html.innerHTML = page;
             
               }
    } catch (error) {
        console.error(error)
    }
}


function getPlayersFromStorage() {
    try {
      const emptyPlayers:Player[]=[]  
      const playersString = localStorage.getItem("players");
      if (!playersString) return emptyPlayers;
      const players = JSON.parse(playersString);
      return (players)
    }
    catch (error) {
      console.error(error);
      return (undefined)
    }
  }




