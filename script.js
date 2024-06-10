// Query selectors



// Create a function to generate the grid
// Create two nested for loops one for rows and one for cloumns
// Within the loops create new divs and give them an id
// Append all the mainContainer
function createGrid(size) {
    const mainContainer = document.querySelector(".mainContainer"); 
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        //row.addEventListener("mouseover", changeColor);
        mainContainer.appendChild(row);
        for (let i = 0; i < size; i++) {
            const col = document.createElement("div");
            col.setAttribute("class", "col");
            col.addEventListener("mouseover", changeColor);
            row.appendChild(col);
        }
    };

};

function changeColor(event) {
    event.target.style.backgroundColor = getRandomColor();

};

// Randomize color
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", resetGrid);

function resetGrid(){
    const mainContainer = document.querySelector(".mainContainer");
    mainContainer.innerHTML = "";
    let gridSize = prompt("How big is your grid going to be?");
    if (gridSize > 100) {
        alert("Smaller than 100");
    } else {
        createGrid(Number(gridSize));
    }
    
};


createGrid(16);