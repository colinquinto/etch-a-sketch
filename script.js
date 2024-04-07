// Create main container div that will store the columns and row then append it to the body
let divContainer = document.createElement("div")
divContainer.classList.add("container")
document.body.appendChild(divContainer)

let inputSquares = (boxAmount) => {

  // Create the columns
  for (let boxColumn = 0; boxColumn < boxAmount; boxColumn++) {
       let column = document.createElement("div");
       column.classList.add("column");
    // Add a row after a column is created
    for (let boxRow = 1; boxRow <= boxAmount; boxRow++) {
      const sizeOfContainer = 960 / boxAmount
      let row = document.createElement("div");
      row.classList.add("row");
      // Set dynamic width and height to columns and rows using the value of sizeOfContainer
      row.style.width = `${sizeOfContainer}px` 
      row.style.height = `${sizeOfContainer}px`
      // Add a background color to rows when a mouse hovers on it to simulate a sketch pad
      row.addEventListener('mouseenter', () =>   row.style.backgroundColor = "black")
      column.appendChild(row);
    }
    divContainer.appendChild(column);
  }
}

inputSquares(50)

let btnContainer = document.createElement("div")
btnContainer.classList.add("buttons")

let inputButton = document.createElement("button")
inputButton.textContent = "Change size"

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



