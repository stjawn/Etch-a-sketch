 

const mainContainer = document.createElement("div");
mainContainer.id = "main";
document.body.appendChild(mainContainer);

createGrid();



// Functions

function createGrid() {
    const gridContainer = document.createElement("div");
    gridContainer.id = "grid";
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateRows = "repeat(32, 1fr)";
    gridContainer.style.gridTemplateColumns = "repeat(32, 1fr)";
    for (let j = 1; j < 33; j++) {
        for (let i = 1; i < 33; i++) {
            let gridCell = document.createElement("div");
            gridCell.style.gridColumn = i;
            gridCell.style.gridRow = j;
            gridCell.classList.add("gridCell");
            gridCell.id = "cell" + i + "," + j;
            gridCell.style.paddingBottom = "100%";
            gridCell.style.border = "1px dotted black";

            gridCell.addEventListener("click", () => {
                gridCell.classList.toggle("filled");
            })
            if ((i === 1) || (i === 32) || (j === 1) || (j === 32)) {
                gridCell.addEventListener("click", () => {
                    shake()
                })
            }
            gridContainer.appendChild(gridCell);
        }
    }
    mainContainer.appendChild(gridContainer);
}


function shake() {
    const cells = document.getElementsByClassName("gridCell");
    for (let i = 0; i < cells.length; i++) {
        let randVal = ((Math.random() * 100000).toFixed(0)) % 2;
        if (randVal === 0) {
            cells[i].classList.toggle("filled", true);
        } else {
            cells[i].classList.toggle("filled", false)
        }
    }
}

