const divContainer = document.querySelector('.divContainer');
const resetButton = document.querySelector('#reset');
const blackColorChange = document.querySelector('#blackColorChange');


let squares = prompt('How many squares do you want? ');
let squareLength = 960/squares;


function changeColorRandom(event) {
    let first = Math.floor(Math.random() * 256);
    let second = Math.floor(Math.random() * 256);
    let third = Math.floor(Math.random() * 256);
    event.target.style.cssText = `background-color:rgb(${first},${second},${third}); width:${squareLength}px; height:${squareLength}px;`
}

function squaresGen (n) {
    let squares = n*n;
    squareLength = 960/n;
    for (;squares>0;squares--) {
        let squareDiv = document.createElement('div');
        squareDiv.addEventListener('mouseenter', changeColorRandom);
        squareDiv.setAttribute('style', `width:${squareLength}px; height:${squareLength}px;`)
        divContainer.appendChild(squareDiv);
    }
}

// #####
squaresGen(squares);
// #####

function changeColorBlack() {
    let squareDivs = document.querySelectorAll('.divContainer>div');
    squareDivs.forEach((div) => div.addEventListener('mouseenter', (e) => e.target.style.background = 'black'))
}


function reset() {
    let squareDivs = document.querySelectorAll('.divContainer>div');
    squareDivs.forEach((squareDiv) => divContainer.removeChild(squareDiv));
    squares = prompt('How many squares do you want? ');
    squaresGen(squares);
}



blackColorChange.addEventListener('click', changeColorBlack)

resetButton.addEventListener('click', reset);
