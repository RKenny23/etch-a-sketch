// Select the containers pre-made in html file
const btnContainer = document.querySelector('.buttons');
const gridContainer = document.querySelector('.grid-container'); 

// Create the buttons
const blackBtn = document.createElement('button');
const randomBtn = document.createElement('button');
const resetBtn = document.createElement('button');

// Add the buttons to the button container
btnContainer.appendChild(blackBtn).classList.add('btn');
btnContainer.appendChild(randomBtn).classList.add('btn');
btnContainer.appendChild(resetBtn).classList.add('btn');

// Style the buttons
blackBtn.style.background = 'black';
randomBtn.style.background = 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)';
resetBtn.innerHTML = 'reset';

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

function drawBlack() {
  const boxes = gridContainer.querySelectorAll('.box')
  boxes.forEach(box => {
    box.addEventListener('mouseover', e => {
      e.target.style.backgroundColor = '#000';
    })
  })
}

drawBlack()

function drawColor() {
  const boxes = gridContainer.querySelectorAll('.box')
  boxes.forEach(box => {
    box.addEventListener('mouseover', e => {
      let r = Math.floor(Math.random() * 255)
      let g = Math.floor(Math.random() * 255)
      let b = Math.floor(Math.random() * 255)
      e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    })
  })
}

blackBtn.addEventListener('click', () => {
  drawBlack();
})

randomBtn.addEventListener('click', () => {
  drawColor();
})

// Removes the boxes from the grid
function clearGrid() {
  const boxes = gridContainer.querySelectorAll('.box');
  boxes.forEach(box => {
    box.remove();
  })
}

// Allows user to click reset button input custom grid size
resetBtn.addEventListener('click', () => {
  let userInput = prompt("Enter a grid size:", 16);  
  if (userInput != null && userInput <= 100) {
    clearGrid();
    createGrid(userInput, userInput);
    drawBlack();
  }
  else
    alert('Enter a value between 1 and 100.')
})

