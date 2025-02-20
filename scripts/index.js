const button = document.querySelector("button");

button.addEventListener("click", () => {

let randomNum1 = Math.floor(Math.random() * 6) + 1;
let randomNum2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", `images/dau${randomNum1}.png`);
document.querySelector(".img2").setAttribute("src", `images/dau${randomNum2}.png`);

if (randomNum1 > randomNum2)
    document.querySelector("h1").textContent = "Player 1 Wins! 🚩";
else if (randomNum1 < randomNum2)
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
else
    document.querySelector("h1").textContent = "Draw!";

});
