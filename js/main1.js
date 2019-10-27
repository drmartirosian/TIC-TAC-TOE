// Display an empty tic-tac-toe board when the page is initially displayed.--CHECK
// A player can click on the nine cells to make a move.
// Every click will alternate between marking an X and O.
// Once occupied with an X or O, the cell cannot be played again.
// Provide a Reset Game button that will clear the contents of the board.--CHECK


/*------------ constants --------------*/
const winConditions = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],

    ['1', '4', '7'],
    ['2', '5', '8'],
    ['7', '8', '9'],

    ['1', '5', '9'],
    ['3', '5', '7'],
];

const content = document.getElementById('message');

/*----- app's state (variables) -------*/
var turn = []; //number of turns in game...
var o = [];
var x = [];


/*----- cached element references -----*/
//TILE BUTTONS
const tileAll = document.querySelectorAll('.tiles');

/*------------ event listeners ---------*/
//LISTENER FOR CLICK
tileAll.forEach(element => {
    element.addEventListener('click', tileClick);
});

/*------------ functions ----------------*/
//TAKING TURNS
function tileClick() { 
    turn.push('');

    if (turn.length % 2 !== 0 && turn.length <= 9) { //PLAYER1
        message.textContent = "PLAYER1'S TURN!";
        tiles.innerHTML = "X";

    } else if (turn.length % 2 === 0 && turn.length <= 9) { //PLAYER2
        message.textContent = "PLAYER2'S TURN!";
        tiles.innerHTML = "O";


    } else if (turn.length >= 10)
        message.textContent = "DRAW!";
    console.log(turn.length);
};

// 





  //TEST SITE:
  //     for (turn = 0; turn <= 9; turn++) { //+1 to array every click...
//     };
// };

        //player 1 starts game-odd numbered turns
        // if (turn.length % 2 !== 0) {
        // turn.push(1);
        // };

        //player 2 follows after -even numbered turns
        // if (turn.length % 2 === 0) {
        // turn.push(1);
        // };


