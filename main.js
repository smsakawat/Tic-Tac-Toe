// global variables
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;
console.log("welcoome to tic tac toe");
// Func for changing the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// Func for checking win
const checkWin = () => {
  const boxTexts = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[2]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText = `${
        boxTexts[e[0]].innerText
      } Won`;
      isGameOver = true;
    }
  });
};

// Logics
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isGameOver) {
        document.querySelector(".info").innerText = "Turn for " + turn;
      }
    }
  });
});

const reset = document.getElementById("resetBtn");
// Reset game
reset.addEventListener("click", () => {
  let boxTexts = document.querySelectorAll(".boxtext");
  Array.from(boxTexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.querySelector(".info").innerText = "Turn for " + turn;
});
