function startGame(){
  //starting a new Game
  let messageElement = document.getElementById('message');
  messageElement.innerText = "Welcome! Starting new Game";
}

document.getElementById("StartGame").addEventListener('click',startGame);
