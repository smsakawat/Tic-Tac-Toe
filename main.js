// global variables
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;

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
      document
        .querySelector(".excite_img")
        .getElementsByTagName("img")[0].style.width = "20vmax";
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
        document.getElementById("msg_info").innerText = `Turn for ${turn}`;
      }
    }
  });
});

// event listener for reset
const reset = document.getElementById("resetBtn");
reset.addEventListener("click", () => {
  console.log("reset clicked");
  const boxes = document.querySelectorAll(".box");
  Array.from(boxes).forEach((element) => {
    element.querySelector(".boxtext").innerText = "";
  });
  turn = "X";
  document.querySelector(".info").innerText = `Turn for ${turn}`;
  document
    .querySelector(".excite_img")
    .getElementsByTagName("img")[0].style.width = "0";
});
