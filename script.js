// Select the containers pre-made in html file
const btnContainer = document.querySelector('.buttons');
const gridContainer = document.querySelector('.grid-container'); 

// Create the buttons
const resetBtn = document.createElement('button');
const blackBtn = document.createElement('button');

// Add the buttons to the button container
btnContainer.appendChild(resetBtn).classList.add('btn');
btnContainer.appendChild(blackBtn).classList.add('btn');

// Style the buttons
resetBtn.innerHTML = 'reset';
blackBtn.style.backgroundColor = 'black';

// Create divs to go in the container
function createGrid(cols, rows) {
  for (i = 0; i < (cols * rows); i++) {
    const newDiv = document.createElement('div');    
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;    
    gridContainer.appendChild(newDiv).className = 'box';
  }
}

createGrid(16, 16);

// Add mouseover event for the new divs
function drawBlack() {
  const boxes = gridContainer.querySelectorAll('.box')
  boxes.forEach(box => {
    box.addEventListener('mouseover', e => {
      e.target.style.backgroundColor = '#000';
    })
  })
}

drawBlack()

// Lets user draw black when black button is pressed
blackBtn.addEventListener('click', () => {
  drawBlack();
})

// Removes the boxes from the grid
function clearGrid() {
  const boxes = gridContainer.querySelectorAll('.box');
  boxes.forEach(box => {
    box.remove();
  })
}

// Allows user to input custom grid size
resetBtn.addEventListener('click', () => {
  let userInput = prompt("Enter a grid size:", 16);  
  if (userInput != null) {
    clearGrid();
    createGrid(userInput, userInput);
  }
})

