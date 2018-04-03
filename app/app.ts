function startGame(){
  //starting a new Game
  let playername: string = "Ronald";
  logPlayer(playername);
  let messageElement = document.getElementById('message');
  messageElement!.innerText = "Welcome! Starting new Game";
  console.log("Starting new Game.");
};
function logPlayer(name){
  console.log(`New Game for ${name} `);
};
// !<-- non-null assertionss
document.getElementById("StartGame")!.addEventListener('click', startGame);
