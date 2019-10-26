// /*----- constants ----------------------*/
// const x = [];
// const o = [];
// const gameBoard = [];
// const winSCENARIOS = [
//     '123', 
//     '456', 
//     '789', 
//     '147', 
//     '256', 
//     '369', 
//     '159', 
//     '357'
// ];

// /*----- app's state (variables) -------*/
// let win = a;


/*----- cached element references -----*/
//TILE BUTTONS
const tileAll = document.querySelectorAll('.tiles');
//RESET BUTTON
const resetButton = document.querySelectorAll('.reset');


/*------------ event listeners ---------*/
//LISTENER FOR CLICK
tileAll.forEach(element => {
    element.addEventListener('click', tileClick);
});
//LISTENER FOR RESET
resetButton.forEach(element => {
    element.addEventListener('click', resetListener);
});


/*------------ functions ----------------*/
//TILE BUTTON DOES THIS
function tileClick(evt) {
    console.log(evt.target);
};

//RESET BUTTON DOES THIS:
function resetListener(evt) {
    console.log(evt.target);
};
