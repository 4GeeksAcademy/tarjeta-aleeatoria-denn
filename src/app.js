const numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "J", "K", "A"];

const icons = ["♦", "♥", "♠", "♣"];



function changeCard() {
  let i = Math.floor(Math.random() * numbers.length);

  let y = Math.floor(Math.random() * icons.length);
  
  let valueElement = document.querySelector("#value")
  valueElement.textContent = numbers[i]


  let topIconElement = document.querySelector(".top-icon")
  topIconElement.textContent = icons[y]

  let bottonIconElement = document.querySelector(".bottom-icon")
  bottonIconElement.textContent = icons[y]

  let card = document.querySelector(".card")
  if (icons[y] === "♥" || icons[y] === "♦") {
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



console.log(icons[y])
