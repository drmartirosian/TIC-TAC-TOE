/*------------ constants --------------*/
var turn = [];

/*----- app's state (variables) -------*/

/*----- cached element references -----*/
//TILE BUTTONS
const tileAll = document.querySelectorAll('.tiles');

/*------------ event listeners ---------*/
//LISTENER FOR CLICK
tileAll.forEach(element => {
    element.addEventListener('click', tileClick);
});

/*------------ functions ----------------*/
function tileClick() { 
    turn.push('')
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


