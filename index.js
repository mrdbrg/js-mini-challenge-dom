/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header.textContent)


/***** Deliverable 2 *****/
header.style.color = "red";

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)
let playerContainer = document.querySelector("div.player-container")

// console.log(playerContainer)

PLAYERS.forEach(function(player) {
  // DIV - class="player" data-number="<player Number>"
  playerContainer.innerHTML += `
    <div class="player" data-number="${player.number}">
      <h3>
        ${player.name} (<em>${player.nickname}</em>)
      </h3>
      <img src="${player.photo}" alt="${player.name}">
    </div>
  `;
})  

/***** Deliverable 4 *****/
const sneaky = document.querySelector('div[data-number="7"]')
console.log(sneaky)
sneaky.remove()
// while (sneaky.firstChild) {
//   console.log(sneaky)
//   sneaky.removeChild(sneaky.firstChild);
// }