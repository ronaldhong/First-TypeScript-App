function startGame(){
  //starting a new Game
  const playername: string = "Ronald";
  logPlayer(playername);

  var messageElement = document.getElementById('message');

  messageElement.innerText = "Welcome! Starting new Game";
  console.log("Starting new Game.");
};
function logPlayer(name){
  console.log(`New Game for ${name} `);
};

document.getElementById("StartGame").addEventListener('click', startGame);
