// Display an empty tic-tac-toe board when the page is initially displayed.--CHECK
// A player can click on the nine cells to make a move.--CHECK
// Every click will alternate between marking an X and O.--CHECK
// Once occupied with an X or O, the cell cannot be played again.
// Provide a Reset Game button that will clear the contents of the board.--CHECK


/*------------ constants --------------*/
const content = document.getElementById('message');//for message...

const win = [                  //possible win scenarios...
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],

            [1, 4, 7],
            [2, 5, 8],
            [7, 8, 9],

            [1, 5, 9],
            [3, 5, 7],
];


/*----- app's state (variables) -------*/
var turn = []; //number of turns in game...
var playerO = []; //
var playerX = []; //


/*----- cached element references -----*/
//TILE BUTTONS
const tileAll = document.querySelectorAll('.tiles');

/*------------ event listeners ---------*/
//LISTENER FOR CLICK
tileAll.forEach(element => {
    element.addEventListener('click', tileClick);
});







/*------------ functions ----------------*/
//STATES OF GAMEPLAY...
function tileClick(event) { 
    turn.push(''); //+1 to turn array per click
    let tileLabeler = event.target;

    if (turn.length % 2 !== 0 && turn.length <= 9) { //PLAYER1
        message.textContent = "PLAYER2'S TURN!";
        tileLabeler.innerHTML = "X";
        playerX.push(tileLabeler.id);
        playerX.sort();
        console.log(playerX);

    } if (turn.length % 2 === 0 && turn.length <= 9) { //PLAYER2
        message.textContent = "PLAYER1'S TURN!";
        tileLabeler.innerHTML = "O";
        playerO.push(tileLabeler.id);
        playerO.sort();
        console.log(playerO);

    } if (turn.length >= 9) 
        message.textContent = "DRAW!";
        // console.log(turn.length); 
};

console.log(JSON.stringify(win));
