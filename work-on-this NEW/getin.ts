let sendBtn = document.getElementById("send");
let form = document.getElementById("form");
const imgDiv = document.querySelector("#container");
const img = document.querySelector("#photo");
const file = document.querySelector<HTMLInputElement>("#file");
const uplodeBtn = document.querySelector("#uplodebtn");

function ageCalculator(): void {
  try {
  const userinput: string | null = (<HTMLInputElement>document.getElementById("dob")).value;
  const dob: Date = new Date(userinput);
  if (userinput == null || userinput == "") {
    document.getElementById("message")!.innerHTML = "**Choose a date please!";
    return;
  } else {
    const month_diff: number = Date.now() - dob.getTime();
    const age_dt: Date = new Date(month_diff);
    const year: number = age_dt.getUTCFullYear();
    const age: number = Math.abs(year - 1970);
    console.log("Age is: " + age + " years.");
  }
}catch (error) {
    console.error(error)
  }
}


form?.addEventListener("submit", (e) => {
  e.preventDefault;
});

sendBtn?.addEventListener("click", (e) => {
  const nameElement:any = document.getElementById("name");
  const DateOfBirthElement:any = document.getElementById("dob");



  if (!nameElement) throw new Error ("could'nt find the name element")
  const name:string = nameElement.value.toString();
  
  // localStorage.setItem('name',name);
  if (!DateOfBirthElement)
    throw new Error("couldnt find date of birth element");

  const dateOfBirth: Date = new Date(DateOfBirthElement.value);
  if(!dateOfBirth) throw new Error("couldnt find the date");
  // localStorage.setItem('dob',dob);
  
  const fileArrey = localStorage.getItem("file");
  if(!fileArrey) throw new Error("couldnt find the date");
  const file= fileArrey;
  const PlayersFromStorage:Player[]=getPlayersFromStorage()
  PlayersFromStorage.push(new Player(name, dateOfBirth, file));
  localStorage.setItem("players", JSON.stringify(PlayersFromStorage));

  // localStorage.setItem('photo',pfp);

});
file?.addEventListener("change", (ev:any) => {
  const image = ev.target.file[0];
  const reader = new FileReader();
  reader.readAsDataURL(image);
  reader.addEventListener("load", () => {
  });
});


file?.addEventListener("change", function (this: HTMLInputElement) {
  const choosedFile = this.files?.[0];
  if (choosedFile) {
    const reader = new FileReader();
    reader.addEventListener("load", function(this: FileReaderEventMap["load"]) {
      img?.setAttribute("src", reader.result as string);
      localStorage.setItem("file", reader.result as string);
    });
    reader.readAsDataURL(choosedFile);
  }
});

function addStar(): void {
  try {
    
  const s = document.createElement("div");
  s.className = "star";
  s.style.setProperty("--size", `${Math.random() * 10 + 3}vmin`);
  s.style.left = `${Math.floor(Math.random() * 100)}%`;
  s.style.top = `${Math.floor(Math.random() * 100)}%`;
  s.onanimationend = function () {
    this.remove();
  };
  document.body.appendChild(s);}
  catch (error) {
    console.error(error)
  }
}

setInterval(addStar, 200);


function renderusers(players: Player[]) {
try {
  let page = "";
  for (let j = 0; j <= players.length - 1; j++) {
    page += ` <div class="recurring_user" >
    <a href="./inex.html" onclick="beginGame('${players[j].uid}')" > 
    <img class="userImg" src='${players[j].file}'/></a>
    <button onclick="handleDeleteUser('${players[j].uid}')">Remove</button>  
    </div> `; 
  }
  const html: HTMLDivElement | null = document.querySelector("#listofUsers");
  if (html !== null) 
      html.innerHTML = page;
}
 catch (error) {
  console.error(error)
}
}

function handleDeleteUser(uid:string){
  try {
    const playersArray=getPlayersFromStorage();

    const index = playersArray.findIndex((Player) => Player.uid === uid);
    if (index === -1) throw new Error("player not found");
    playersArray.splice(index, 1);
    localStorage.setItem("players", JSON.stringify(playersArray))
    renderusers(playersArray);


  } catch (error) {
    console.error(error);
  }
}