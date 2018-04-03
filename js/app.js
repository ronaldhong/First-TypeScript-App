function startGame() {
    var playername = "Ronald";
    logPlayer(playername);
    var messageElement = document.getElementById('message');
    messageElement.innerText = "Welcome! Starting new Game";
    console.log("Starting new Game.");
}
;
function logPlayer(name) {
    console.log("New Game for " + name + " ");
}
;
document.getElementById("StartGame").addEventListener('click', startGame);
//# sourceMappingURL=app.js.map