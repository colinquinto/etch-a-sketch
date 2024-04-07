let divContainer = document.createElement("div")
divContainer.classList.add("container")
document.body.appendChild(divContainer)

let inputSquares = (boxAmount) => {

  // Create the columns then create the rows after it  
  for (let boxColumn = 0; boxColumn < boxAmount; boxColumn++) {
       let column = document.createElement("div");
       column.classList.add("column");

    for (let boxRow = 1; boxRow <= boxAmount; boxRow++) {
      const sizeOfContainer = 960 / boxAmount
      let row = document.createElement("div");
      row.classList.add("row");
      // Set dynamic width and height to columns and rows using the value of sizeOfContainer
      row.style.width = `${sizeOfContainer}px` 
      row.style.height = `${sizeOfContainer}px`
      column.appendChild(row);
    }
    divContainer.appendChild(column);
  }
}

inputSquares(50)


