// Select the container made in html file
const gridContainer = document.querySelector('.grid-container'); 

const btnContainer = document.querySelector('buttons');

// Create the buttons

const blackBtn = document.createElement('button');
const sizeBtn = document.createElement('button');
const resetBtn = document.createElement('button');



document.body.appendChild(resetBtn);
resetBtn.style.width = '80px';
resetBtn.style.height = '80px';
resetBtn.style.backgroundColor = 'red';

document.body.appendChild(blackBtn);
blackBtn.style.width = '80px';
blackBtn.style.height = '80px';
blackBtn.style.backgroundColor = 'black';



  // if (userInput != null) {
  //   let gridSize = userInput;
  // })
  // resetBtn.addEventListener('click', () => {
  //   prompt("Enter a grid size", 16);  
    
   


// Create divs to go in the container. # based on user input
function createGrid(cols, rows) {
  for (let i = 0; i < cols; i++) {
    const newDiv = document.createElement('div');
    
    // newDiv.style.border = '1px solid black';
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 1fr)`;    
    gridContainer.appendChild(newDiv).classList.add('box');
  }
}


// Call the function to make the grid based on user input

createGrid(16, 16);

//Select all the divs with the 'box' class
// function colorBlack() {
//   const boxes = gridContainer.querySelectorAll('.box');
//   btnBlack.style.background = 'black';
//   btnBlack.textAlign = 'center';
//   bbtnBlack.addEventListener('click', () => {
//     boxes.forEach(box => box.addEventListener('mouseover', () => {
//       box.style.background = 'black';
//     }))
    
//   })

//   gridContainer.appendChild(btnGray).classList.add('btn')

// 
