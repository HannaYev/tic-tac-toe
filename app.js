const block = document.querySelector(".block");
const cell = document.getElementsByClassName("cell");

for (let i = 1; i <= 9; i++) {
  block.innerHTML += '<div class = "cell" pos =' + i + "></div";
}
let person = "X";
let winCombination = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", ClickFn);
}

function ClickFn() {
  let data = [];
 
  if (!this.innerHTML) {
    this.innerHTML = person;
  } else {
    alert("Ячейка занята");
    return;
  }

  for (let i = 0; i < cell.length; i++) {
    
    if (cell[i].innerHTML === person) {
      data.push(i + 1);
    }
  }

  if (checkWin(data)) {
    restart("выиграл игрок: " + person);
  } else {
    let draw = true;
    for (let i in cell) {
      if (cell[i].innerHTML === "") {
        draw = false;
        }
      
    }
    if (draw) restart("Ничья");
  }
  person = person === "X" ? "0" : "X";
  
}

function checkWin(data) {
  for (let i in winCombination) {
    let win = true;
    for (let j in winCombination[i]) {
      let id = winCombination[i][j];
      let ind = data.indexOf(id);
      if (ind === -1) {
        win = false;
      }
    }
    if (win) return true;
  }
  return false;
}

function restart(text) {
  alert(text);
  for (let i=0; i< cell.length; i++) {
    cell[i].innerHTML = "";
  }
}
