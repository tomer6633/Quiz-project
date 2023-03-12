const sendBtn = document.getElementById("send");
const form = document.getElementById("form");
const imgDiv = document.querySelector("#container");
const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const uplodeBtn = document.querySelector("#uplodebtn");
function ageCalculator() {
    try {
        const userinput = document.getElementById("dob").value;
        const dob = new Date(userinput);
        if (userinput == null || userinput == "") {
            document.getElementById("message").innerHTML = "**Choose a date please!";
            return;
        }
        else {
            const month_diff = Date.now() - dob.getTime();
            const age_dt = new Date(month_diff);
            const year = age_dt.getUTCFullYear();
            const age = Math.abs(year - 1970);
            console.log("Age is: " + age + " years.");
        }
    }
    catch (error) {
        console.error(error);
    }
}
form?.addEventListener("submit", (e) => {
    e.preventDefault;
});
if (!sendBtn)
    throw new Error("sendBtn is null");
sendBtn.addEventListener("click", (e) => {
    try {
        const nameElement = document.getElementById("name");
        const DateOfBirthElement = document.getElementById("dob");
        if (!nameElement)
            throw new Error("could'nt find the name element");
        const name = nameElement.value.toString();
        if (!DateOfBirthElement)
            throw new Error("couldnt find date of birth element");
        const dateOfBirth = new Date(DateOfBirthElement.value);
        if (!dateOfBirth)
            throw new Error("couldnt find the date");
        const fileArrey = localStorage.getItem("file");
        if (!fileArrey)
            throw new Error("couldnt find the date");
        const file = fileArrey;
        const tempScore = 0;
        const PlayersFromStorage = getPlayersFromStorage();
        debugger;
        PlayersFromStorage.push(new Player(name, dateOfBirth, file, tempScore));
        console.log(PlayersFromStorage);
        localStorage.setItem("players", JSON.stringify(PlayersFromStorage));
    }
    catch (error) {
        console.error(error);
    }
});
file?.addEventListener("change", (ev) => {
    const image = ev.target.file[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener("load", () => {
    });
});
file?.addEventListener("change", function () {
    try {
        const choosedFile = this.files?.[0];
        if (choosedFile) {
            const reader = new FileReader();
            reader.addEventListener("load", function () {
                img?.setAttribute("src", reader.result);
                localStorage.setItem("file", reader.result);
            });
            reader.readAsDataURL(choosedFile);
        }
    }
    catch (error) {
        console.error(error);
    }
});
function addStar() {
    try {
        const s = document.createElement("div");
        s.className = "star";
        s.style.setProperty("--size", `${Math.random() * 10 + 3}vmin`);
        s.style.left = `${Math.floor(Math.random() * 100)}%`;
        s.style.top = `${Math.floor(Math.random() * 100)}%`;
        s.onanimationend = function () {
            this.remove();
        };
        document.body.appendChild(s);
    }
    catch (error) {
        console.error(error);
    }
}
setInterval(addStar, 200);
function renderusers(players) {
    try {
        let page = "";
        for (let j = 0; j <= players.length - 1; j++) {
            page += ` <div class="recurring_user" >
    <a href="./inex.html" onclick="beginGame('${players[j].uid}')" > 
    <img class="userImg" src='${players[j].file}'/></a>
    <button onclick="handleDeleteUser('${players[j].uid}')">Remove</button>  
    </div> `;
        }
        const html = document.querySelector("#listofUsers");
        if (html !== null)
            html.innerHTML = page;
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteUser(uid) {
    try {
        const playersArray = getPlayersFromStorage();
        const index = playersArray.findIndex((Player) => Player.uid === uid);
        if (index === -1)
            throw new Error("player not found");
        playersArray.splice(index, 1);
        localStorage.setItem("players", JSON.stringify(playersArray));
        renderusers(playersArray);
    }
    catch (error) {
        console.error(error);
    }
}
