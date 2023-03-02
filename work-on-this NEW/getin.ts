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
  const nameElement = document.getElementById("name");
  const DateOfBirthElement:any = document.getElementById("dob");

  debugger;

  if (!nameElement) throw new Error ("could'nt find the name element")
  const name:string = nameElement.value.toString();
  
  // localStorage.setItem('name',name);
  if (!DateOfBirthElement)
    throw new Error("couldnt find date of birth element");

  const dateOfBirth: Date = new Date(DateOfBirthElement.value);
  if(!dateOfBirth) throw new Error("couldnt find the date");
  // localStorage.setItem('dob',dob);
  const fileArrey = localStorage.getItem("file");

  if (name && dateOfBirth && fileArrey) players.push(new Player(name, dateOfBirth, fileArrey));
  localStorage.setItem("players", JSON.stringify(players));

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
