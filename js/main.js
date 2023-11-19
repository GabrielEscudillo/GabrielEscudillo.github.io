const selectedColors = JSON.parse(localStorage.getItem("selectedColors"));
// Obtiene los primeros cuatro colores del array
const color1 = selectedColors[0];
const color2 = selectedColors[1];
const color3 = selectedColors[2];
const color4 = selectedColors[3];

function ApplySelectedColors(element, color) {
  if (element && color) {
    element.style.backgroundColor = color;
  }
}
// Aplica los colores a los elementos correspondientes
ApplySelectedColors(document.getElementById("selectedColor1"), color1);
ApplySelectedColors(document.getElementById("selectedColor2"), color2);
ApplySelectedColors(document.getElementById("selectedColor3"), color3);
ApplySelectedColors(document.getElementById("selectedColor4"), color4);
// FIN COLORES

// Mostrar el nombre del jugador
let showSelectedName = document.getElementById("showSelectedName");

let playerName = localStorage.getItem("playerName");

showSelectedName.innerText = playerName;
// FIN MOSTRAR NOMBRE DEL JUGADOR

// Función para generar la respuesta correcta
function generateCorrectAnswer() {
  let keyArray = [];

  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * selectedColors.length);
    keyArray.push(selectedColors[random]);
  }

  return keyArray;
}

// Obtener la respuesta correcta
const correctKeyArray = generateCorrectAnswer();

// Define your constants for rows
const rows = [
  ["#row1c1", "#row1c2", "#row1c3", "#row1c4"],
  ["#row2c1", "#row2c2", "#row2c3", "#row2c4"],
  ["#row3c1", "#row3c2", "#row3c3", "#row3c4"],
  ["#row4c1", "#row4c2", "#row4c3", "#row4c4"],
  ["#row5c1", "#row5c2", "#row5c3", "#row5c4"],
  ["#row6c1", "#row6c2", "#row6c3", "#row6c4"],
  ["#row7c1", "#row7c2", "#row7c3", "#row7c4"],
  ["#row8c1", "#row8c2", "#row8c3", "#row8c4"],
  ["#row9c1", "#row9c2", "#row9c3", "#row9c4"],
  ["#row10c1", "#row10c2", "#row10c3", "#row10c4"],
];

selectedColor1.addEventListener("click", function () {
  applyColorToRows(selectedColor1.style.backgroundColor);
});

selectedColor2.addEventListener("click", function () {
  applyColorToRows(selectedColor2.style.backgroundColor);
});

selectedColor3.addEventListener("click", function () {
  applyColorToRows(selectedColor3.style.backgroundColor);
});

selectedColor4.addEventListener("click", function () {
  applyColorToRows(selectedColor4.style.backgroundColor);
});
// Counter to keep track of the current target element
let currentRow = 0;
let currentColumn = 0;
// Asegúrate de obtener la referencia al botón checkButton en tu código HTML

const backgroundbox = (box) => {
  return window.getComputedStyle(box).backgroundColor;
};

const emptyBox = (box1, box2, box3, box4) => {
  if (
    backgroundbox(box1) === "rgba(133, 163, 175, 0.7)" ||
    backgroundbox(box2) === "rgba(133, 163, 175, 0.7)" ||
    backgroundbox(box3) === "rgba(133, 163, 175, 0.7)" ||
    backgroundbox(box4) === "rgba(133, 163, 175, 0.7)"
  ) {
    return true;
  }
};
const checkbox11 = document.getElementById("checkbox1-1");
const checkbox12 = document.getElementById("checkbox1-2");
const checkbox13 = document.getElementById("checkbox1-3");
const checkbox14 = document.getElementById("checkbox1-4");
const checkbox21 = document.getElementById("checkbox2-1");
const checkbox22 = document.getElementById("checkbox2-2");
const checkbox23 = document.getElementById("checkbox2-3");
const checkbox24 = document.getElementById("checkbox2-4");
const checkbox31 = document.getElementById("checkbox3-1");
const checkbox32 = document.getElementById("checkbox3-2");
const checkbox33 = document.getElementById("checkbox3-3");
const checkbox34 = document.getElementById("checkbox3-4");
const checkbox41 = document.getElementById("checkbox4-1");
const checkbox42 = document.getElementById("checkbox4-2");
const checkbox43 = document.getElementById("checkbox4-3");
const checkbox44 = document.getElementById("checkbox4-4");
const checkbox51 = document.getElementById("checkbox5-1");
const checkbox52 = document.getElementById("checkbox5-2");
const checkbox53 = document.getElementById("checkbox5-3");
const checkbox54 = document.getElementById("checkbox5-4");
const checkbox61 = document.getElementById("checkbox6-1");
const checkbox62 = document.getElementById("checkbox6-2");
const checkbox63 = document.getElementById("checkbox6-3");
const checkbox64 = document.getElementById("checkbox6-4");
const checkbox71 = document.getElementById("checkbox7-1");
const checkbox72 = document.getElementById("checkbox7-2");
const checkbox73 = document.getElementById("checkbox7-3");
const checkbox74 = document.getElementById("checkbox7-4");
const checkbox81 = document.getElementById("checkbox8-1");
const checkbox82 = document.getElementById("checkbox8-2");
const checkbox83 = document.getElementById("checkbox8-3");
const checkbox84 = document.getElementById("checkbox8-4");
const checkbox91 = document.getElementById("checkbox9-1");
const checkbox92 = document.getElementById("checkbox9-2");
const checkbox93 = document.getElementById("checkbox9-3");
const checkbox94 = document.getElementById("checkbox9-4");
const checkbox101 = document.getElementById("checkbox10-1");
const checkbox102 = document.getElementById("checkbox10-2");
const checkbox103 = document.getElementById("checkbox10-3");
const checkbox104 = document.getElementById("checkbox10-4");

// const row1c1 = document.getElementById("row1c1");
// const row1c2 = document.getElementById("row1c2");
// const row1c3 = document.getElementById("row1c3");
// const row1c4 = document.getElementById("row1c4");
let checkIterador = 1;

document.addEventListener("DOMContentLoaded", function () {
  const checkButton = document.getElementById("checkButton");

  if (checkButton) {
    checkButton.addEventListener("click", function () {
      if (checkIterador === 1) {
        if (emptyBox(row1c1, row1c2, row1c3, row1c4) === true) {
          alert("EVERY BOX MUST BE COLORED");
        } else {
          if (row1c1.style.backgroundColor === correctKeyArray[0]) {
            checkbox11.style.backgroundColor = "green";
          } else {
            checkbox11.style.backgroundColor = "white";
          }

          if (row1c2.style.backgroundColor === correctKeyArray[1]) {
            checkbox12.style.backgroundColor = "green";
          } else {
            checkbox12.style.backgroundColor = "white";
          }

          if (row1c3.style.backgroundColor === correctKeyArray[2]) {
            checkbox13.style.backgroundColor = "green";
          } else {
            checkbox13.style.backgroundColor = "white";
          }

          if (row1c4.style.backgroundColor === correctKeyArray[3]) {
            checkbox14.style.backgroundColor = "green";
          } else {
            checkbox14.style.backgroundColor = "white";
          }
          if (
            checkbox11.style.backgroundColor == "green" &&
            checkbox12.style.backgroundColor == "green" &&
            checkbox13.style.backgroundColor == "green" &&
            checkbox14.style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/winner.html";
          }
          checkIterador++;
          currentRow++;
        }
      } else if (checkIterador === 2) {
        if (emptyBox(row2c1, row2c2, row2c3, row2c4) === true) {
          alert("EVERY BOX MUST BE COLORED");
        } else {
          if (row2c1.style.backgroundColor === correctKeyArray[0]) {
            checkbox21.style.backgroundColor = "green";
          } else {
            checkbox21.style.backgroundColor = "white";
          }

          if (row2c2.style.backgroundColor === correctKeyArray[1]) {
            checkbox22.style.backgroundColor = "green";
          } else {
            checkbox22.style.backgroundColor = "white";
          }

          if (row2c3.style.backgroundColor === correctKeyArray[2]) {
            checkbox23.style.backgroundColor = "green";
          } else {
            checkbox23.style.backgroundColor = "white";
          }

          if (row2c4.style.backgroundColor === correctKeyArray[3]) {
            checkbox24.style.backgroundColor = "green";
          } else {
            checkbox24.style.backgroundColor = "white";
          }
          if (
            checkbox21.style.backgroundColor == "green" &&
            checkbox22.style.backgroundColor == "green" &&
            checkbox23.style.backgroundColor == "green" &&
            checkbox24.style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/winner.html";
          }
          checkIterador++;
          currentRow++;
        }
      } else if (checkIterador === 3) {
        if (emptyBox(row3c1, row3c2, row3c3, row3c4) === true) {
          alert("EVERY BOX MUST BE COLORED");
        } else {
          if (row3c1.style.backgroundColor === correctKeyArray[0]) {
            checkbox31.style.backgroundColor = "green";
          } else {
            checkbox31.style.backgroundColor = "white";
          }

          if (row3c2.style.backgroundColor === correctKeyArray[1]) {
            checkbox32.style.backgroundColor = "green";
          } else {
            checkbox32.style.backgroundColor = "white";
          }

          if (row3c3.style.backgroundColor === correctKeyArray[2]) {
          } else {
            checkbox33.style.backgroundColor = "white";
          }

          if (row3c4.style.backgroundColor === correctKeyArray[3]) {
            checkbox34.style.backgroundColor = "green";
          } else {
            checkbox34.style.backgroundColor = "white";
          }
          if (
            checkbox31.style.backgroundColor == "green" &&
            checkbox32.style.backgroundColor == "green" &&
            checkbox33.style.backgroundColor == "green" &&
            checkbox34.style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/winner.html";
          }
          checkIterador++;
          currentRow++;
        }
      } else if (checkIterador === 4) {
        if (emptyBox(row4c1, row4c2, row4c3, row4c4) === true) {
          alert("EVERY BOX MUST BE COLORED");
        } else {
          if (row4c1.style.backgroundColor === correctKeyArray[0]) {
            checkbox41.style.backgroundColor = "green";
          } else {
            checkbox41.style.backgroundColor = "white";
          }

          if (row4c2.style.backgroundColor === correctKeyArray[1]) {
            checkbox42.style.backgroundColor = "green";
          } else {
            checkbox42.style.backgroundColor = "white";
          }

          if (row4c3.style.backgroundColor === correctKeyArray[2]) {
            checkbox43.style.backgroundColor = "green";
          } else {
            checkbox43.style.backgroundColor = "white";
          }

          if (row4c4.style.backgroundColor === correctKeyArray[3]) {
            checkbox44.style.backgroundColor = "green";
          } else {
            checkbox44.style.backgroundColor = "white";
          }
          if (
            checkbox41.style.backgroundColor == "green" &&
            checkbox42.style.backgroundColor == "green" &&
            checkbox43.style.backgroundColor == "green" &&
            checkbox44.style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/winner.html";
          }
          checkIterador++;
          currentRow++;
        }
      } else if (checkIterador === 5) {
        if (emptyBox(row5c1, row5c2, row5c3, row5c4) === true) {
          alert("EVERY BOX MUST BE COLORED");
        } else {
          if (row5c1.style.backgroundColor === correctKeyArray[0]) {
            checkbox51.style.backgroundColor = "green";
          } else {
            checkbox51.style.backgroundColor = "white";
          }

          if (row5c2.style.backgroundColor === correctKeyArray[1]) {
            checkbox52.style.backgroundColor = "green";
          } else {
            checkbox52.style.backgroundColor = "white";
          }

          if (row5c3.style.backgroundColor === correctKeyArray[2]) {
            checkbox53.style.backgroundColor = "green";
          } else {
            checkbox53.style.backgroundColor = "white";
          }

          if (row5c4.style.backgroundColor === correctKeyArray[3]) {
            checkbox54.style.backgroundColor = "green";
          } else {
            checkbox54.style.backgroundColor = "white";
          }
          if (
            checkbox51.style.backgroundColor == "green" &&
            checkbox52.style.backgroundColor == "green" &&
            checkbox53.style.backgroundColor == "green" &&
            checkbox54.style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/winner.html";
          }
          checkIterador++;
          currentRow++;
        }
      } else if (checkIterador === 6) {
        if (emptyBox(row6c1, row6c2, row6c3, row6c4) === true) {
          alert("EVERY BOX MUST BE COLORED");
        } else {
          if (row6c1.style.backgroundColor === correctKeyArray[0]) {
            checkbox61.style.backgroundColor = "green";
          } else {
            checkbox61.style.backgroundColor = "white";
          }

          if (row6c2.style.backgroundColor === correctKeyArray[1]) {
            checkbox62.style.backgroundColor = "green";
          } else {
            checkbox62.style.backgroundColor = "white";
          }

          if (row6c3.style.backgroundColor === correctKeyArray[2]) {
            checkbox63.style.backgroundColor = "green";
          } else {
            checkbox63.style.backgroundColor = "white";
          }

          if (row6c4.style.backgroundColor === correctKeyArray[3]) {
            checkbox64.style.backgroundColor = "green";
          } else {
            checkbox64.style.backgroundColor = "white";
          }
          if (
            checkbox61.style.backgroundColor == "green" &&
            checkbox62.style.backgroundColor == "green" &&
            checkbox63.style.backgroundColor == "green" &&
            checkbox64.style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/winner.html";
          }
          checkIterador++;
          currentRow++;
        }
      } else if (checkIterador === 7) {
        if (emptyBox(row7c1, row7c2, row7c3, row7c4) === true) {
          alert("EVERY BOX MUST BE COLORED");
        } else {
          if (row7c1.style.backgroundColor === correctKeyArray[0]) {
            checkbox71.style.backgroundColor = "green";
          } else {
            checkbox71.style.backgroundColor = "white";
          }

          if (row7c2.style.backgroundColor === correctKeyArray[1]) {
            checkbox72.style.backgroundColor = "green";
          } else {
            checkbox72.style.backgroundColor = "white";
          }

          if (row7c3.style.backgroundColor === correctKeyArray[2]) {
            checkbox73.style.backgroundColor = "green";
          } else {
            checkbox73.style.backgroundColor = "white";
          }

          if (row7c4.style.backgroundColor === correctKeyArray[3]) {
            checkbox74.style.backgroundColor = "green";
          } else {
            checkbox74.style.backgroundColor = "white";
          }
          if (
            checkbox71.style.backgroundColor == "green" &&
            checkbox72.style.backgroundColor == "green" &&
            checkbox73.style.backgroundColor == "green" &&
            checkbox74.style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/winner.html";
          }
          checkIterador++;
          currentRow++;
        }
      } else if (checkIterador === 8) {
        if (emptyBox(row8c1, row8c2, row8c3, row8c4) === true) {
          alert("EVERY BOX MUST BE COLORED");
        } else {
          if (row8c1.style.backgroundColor === correctKeyArray[0]) {
            checkbox81.style.backgroundColor = "green";
          } else {
            checkbox81.style.backgroundColor = "white";
          }

          if (row8c2.style.backgroundColor === correctKeyArray[1]) {
            checkbox82.style.backgroundColor = "green";
          } else {
            checkbox82.style.backgroundColor = "white";
          }

          if (row8c3.style.backgroundColor === correctKeyArray[2]) {
            checkbox83.style.backgroundColor = "green";
          } else {
            checkbox83.style.backgroundColor = "white";
          }

          if (row8c4.style.backgroundColor === correctKeyArray[3]) {
            checkbox84.style.backgroundColor = "green";
          } else {
            checkbox84.style.backgroundColor = "white";
          }
          if (
            checkbox81.style.backgroundColor == "green" &&
            checkbox82.style.backgroundColor == "green" &&
            checkbox83.style.backgroundColor == "green" &&
            checkbox84.style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/winner.html";
          }
          checkIterador++;
          currentRow++;
        }
      } else if (checkIterador === 9) {
        if (emptyBox(row9c1, row9c2, row9c3, row9c4) === true) {
          alert("EVERY BOX MUST BE COLORED");
        } else {
          if (row9c1.style.backgroundColor === correctKeyArray[0]) {
            checkbox91.style.backgroundColor = "green";
          } else {
            checkbox91.style.backgroundColor = "white";
          }

          if (row9c2.style.backgroundColor === correctKeyArray[1]) {
            checkbox92.style.backgroundColor = "green";
          } else {
            checkbox92.style.backgroundColor = "white";
          }

          if (row9c3.style.backgroundColor === correctKeyArray[2]) {
            checkbox93.style.backgroundColor = "green";
          } else {
            checkbox93.style.backgroundColor = "white";
          }

          if (row9c4.style.backgroundColor === correctKeyArray[3]) {
            checkbox94.style.backgroundColor = "green";
          } else {
            checkbox94.style.backgroundColor = "white";
          }
          if (
            checkbox91.style.backgroundColor == "green" &&
            checkbox92.style.backgroundColor == "green" &&
            checkbox93.style.backgroundColor == "green" &&
            checkbox94.style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/winner.html";
          }
          checkIterador++;
          currentRow++;
        }
      } else if (checkIterador === 10) {
        if (emptyBox(row10c1, row10c2, row10c3, row10c4) === true) {
          alert("EVERY BOX MUST BE COLORED");
        } else {
          if (row10c1.style.backgroundColor === correctKeyArray[0]) {
            checkbox101.style.backgroundColor = "green";
          } else {
            checkbox101.style.backgroundColor = "white";
          }

          if (row10c2.style.backgroundColor === correctKeyArray[1]) {
            checkbox102.style.backgroundColor = "green";
          } else {
            checkbox102.style.backgroundColor = "white";
          }

          if (row10c3.style.backgroundColor === correctKeyArray[2]) {
            checkbox103.style.backgroundColor = "green";
          } else {
            checkbox103.style.backgroundColor = "white";
          }

          if (row10c4.style.backgroundColor === correctKeyArray[3]) {
            checkbox104.style.backgroundColor = "green";
          } else {
            checkbox104.style.backgroundColor = "white";
          }
          if (
            checkbox101.style.backgroundColor == "green" &&
            checkbox102.style.backgroundColor == "green" &&
            checkbox103.style.backgroundColor == "green" &&
            checkbox104.style.backgroundColor == "green"
          ) {
            window.location.href = "../pages/loser.html";
          } else {
            window.location.href = "../pages/loser.html";
          }
        }
      }
    });
  }
});

// Function to apply color to the specified row and column
function applyColorToRows(color) {
  const targetElement = document.querySelector(rows[currentRow][currentColumn]);
  targetElement.style.backgroundColor = color;

  // Move to the next column or row based on the current position
  if (currentColumn < 3) {
    currentColumn++;
  } else {
    currentColumn = 0;
  }
}
