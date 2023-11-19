let winnerName = document.getElementById("winnerName");

let playerName = localStorage.getItem("playerName");

winnerName.innerText = playerName;