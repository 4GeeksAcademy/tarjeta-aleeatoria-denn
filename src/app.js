const numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "J", "K", "A"];

const icons = ["♦", "♥", "♠", "♣"];



function changeCard() {
  let randomNumber = Math.floor(Math.random() * numbers.length);

  let randomIcon = Math.floor(Math.random() * icons.length);
  
  let valueElement = document.querySelector("#value")
  valueElement.textContent = numbers[randomNumber]


  let topIconElement = document.querySelector(".top-icon")
  topIconElement.textContent = icons[randomIcon]

  let bottonIconElement = document.querySelector(".bottom-icon")
  bottonIconElement.textContent = icons[randomIcon]

  let card = document.querySelector(".card")
  if (icons[randomIcon] === "♥" || icons[randomIcon] === "♦") {
    card.style.color = "red";
  }
  else {
    card.style.color = "black";
  }

}
window.onload = function () {
  changeCard()
}

let button = document.getElementById("button");
button.addEventListener("click", changeCard)



//cambiala carta cada 5 segundos
setInterval(changeCard, 5000); {
  console.log("han pasado 5 segundos");
};

const widthCard = document.querySelector("#widthCard")
const heightCard = document.querySelector("#heightCard")
const card = document.querySelector(".card")

widthCard.addEventListener('input',(e) =>{
  const newWitdh = e.target.value; 
  card.style.width = `${newWitdh}px`;
})

heightCard.addEventListener('input', (e) =>{
  const newHeight = e.target.value;
  card.style.height= `${newHeight}px`;
})