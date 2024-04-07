// Create main container div that will store the columns and rows
let divContainer = document.createElement("div")
divContainer.classList.add("container")
document.body.appendChild(divContainer)

// Get random colors
let getColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

let inputSquares = (boxAmount) => {
//store columns and rows to storeBox
const storeBox = document.createElement("div") 
storeBox.classList.add("storeBox")

  // Create the columns
  for (let boxColumn = 0; boxColumn < boxAmount; boxColumn++) {
       let column = document.createElement("div");
       column.classList.add("column");
    // Add a row after a column is created
    for (let boxRow = 0; boxRow < boxAmount; boxRow++) {
      const sizeOfContainer = 960 / boxAmount
      let row = document.createElement("div");
      row.classList.add("row");
      // Set dynamic width and height to columns and rows using the value of sizeOfContainer
      row.style.width = `${sizeOfContainer}px` 
      row.style.height = `${sizeOfContainer}px`
      // Add a background color to rows when a mouse hovers on it to simulate a sketch pad
      row.addEventListener('mouseenter', () =>   {
        const getOpacity = Number(row.style.opacity)
        row.style.backgroundColor = getColor()
        // Increase opacity each time the event listener is triggered
        row.style.opacity = getOpacity + .1
        // Reset row opacity value to null after reaching the maximum value of 1
        if (Number(row.style.opacity) === 1 ){
            row.style.backgroundColor = "black"
            row.style.opacity = null
           }   
        }
       )
     column.appendChild(row);
    }
   storeBox.appendChild(column)
  }
 divContainer.appendChild(storeBox)
}

inputSquares(0)

let btnContainer = document.createElement("div")
btnContainer.classList.add("buttons")
// Create the button for changing square size
let inputButton = document.createElement("button")
inputButton.textContent = "Create Square"
inputButton.addEventListener('click', () => {
    inputButton.textContent = "Change size"
    let userInput = Number(prompt("Input square size (1-100): "))
    // Validate if the userInput is between 1 or 100
    while(userInput > 100){
        userInput = Number(prompt("Please input a number between 1 and 100: "))
    }
    // Remove the storeBox class to reset the sketch pad back to 0
    const storeBox = document.querySelector(".storeBox")
    storeBox.remove()
    inputSquares(userInput)
}
)

let clearButton = document.createElement("button")
clearButton.textContent = "Clear"
// Add click event listener to clearButton that clears the sketch pad when triggered
clearButton.addEventListener('click', () => {
    // Store all row class to getRow
    let getRow = document.querySelectorAll(".row")
    // Use for loop to set all row class background color to null because queryselector converts the values to array
    for (i = 0; i < getRow.length; i++) {
        getRow[i].style.backgroundColor = null;
    }
}   
)

btnContainer.appendChild(inputButton)
btnContainer.appendChild(clearButton)
document.body.prepend(btnContainer)



