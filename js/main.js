/*----- constants -----*/
// const winSCENARIOS = [
//     '123', '456', '789', '147', '256', '369', '159', '357'
// ];
// const gameBoard = [];

/*----- app's state (variables) -----*/
// let = 


/*----- cached element references -----*/
//resetButton
const tileAll = document.querySelectorAll('.tiles');
console.log(tileAll);

/*----- event listeners -----*/
tileAll.forEach(element => {
    element.addEventListener('click', tileClick);
 
    
});

/*----- functions -----*/
//setupBoard
//takingTurns
//toWinLose
function tileClick(evt) {
    console.log('TEST : ', evt.target);
};