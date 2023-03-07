let sendBtn = document.getElementById("send");
let form = document.getElementById("form");
const imgDiv = document.querySelector("#container");
const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const uplodeBtn = document.querySelector("#uplodebtn");

function ageCalculator() {
  let userinput = document.getElementById("dob").value;
  let dob = new Date(userinput);
  if (userinput == null || userinput == "") {
    document.getElementById("message").innerHTML = "**Choose a date please!";
    return false;
  } else {
    let month_diff = Date.now() - dob.getTime();

    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);
    return console.log("Age is: " + age + " years. ");
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

  file?.addEventListener("change", (ev) => {
    const image = ev.target.file[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener("load", () => {
      // localStorage.setItem('file',reader.result)
    });
  });
});

file?.addEventListener("change", function () {
  const choosedFile = this.files[0];
  if (choosedFile) {
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      img?.setAttribute("src", reader.result);
      localStorage.setItem("file", reader.result);
    });
    reader.readAsDataURL(choosedFile);
  }
});

function addStar() {
  let s = document.createElement("div");
  s.className = "star";
  s.style.setProperty("--size", Math.random() * 10 + 3 + "vmin");
  s.style.left = Math.floor(Math.random() * 100) + "%";
  s.style.top = Math.floor(Math.random() * 100) + "%";
  s.onanimationend = function () {
    this.remove();
  };
  document.body.appendChild(s);
}
setInterval(addStar, 200);


function renderusers(players: Player[]) {
try {
  let page = "";
  for (let j = 0; j <= players.length - 1; j++) {
    page += `<div class="recurring_user">
           <a href="./inex.html" <img
           class="img_bottom_headline" 
           src="data:image/png;base64,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"
           alt=""
         />
            onclick="beginGame('${players[j].uid}')" > 
           <img class="userImg" src='${players[j].file}'/></a>
           <button onclick="handleDeleteUser('${players[j].uid}')">Remove</button>  
           </div> `;
  }
  const html: HTMLDivElement | null = document.querySelector("#listofUsers");
  if (html !== null) 
      html.innerHTML = page;
}
 catch (error) {
  console.error(Error)
}
}

function handleDeleteUser(uid:string){
  debugger;
}