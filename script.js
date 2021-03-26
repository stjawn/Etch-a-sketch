const mainContainer = document.createElement("div");
mainContainer.id = "main";
document.body.appendChild(mainContainer);

const gridContainer = document.createElement("div");
gridContainer.id = "grid";
gridContainer.style.display = "grid";


const sizeButton = document.createElement("button");
sizeButton.id = "sizeButton";
sizeButton.textContent = "Resize";
sizeButton.addEventListener("click", () => {
    changeSize();
})
mainContainer.appendChild(sizeButton);

const shakeButton = document.createElement("button");
shakeButton.id = "shakeButton";
shakeButton.textContent = "Shake!"
shakeButton.addEventListener("click", () => {
    shake();
})
mainContainer.appendChild(shakeButton);


createGrid(16);



// Functions

function createGrid(size) {
    gridContainer.style.gridTemplateRows = "repeat(" + size + ", 1fr)";
    gridContainer.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    for (let j = 1; j < size + 1; j++) {
        for (let i = 1; i < size + 1; i++) {
            let gridCell = document.createElement("div");
            gridCell.id = "cell" + i + "," + j;
            gridCell.classList.add("gridCell");

            gridCell.style.gridColumn = i;
            gridCell.style.gridRow = j;
            gridCell.style.paddingBottom = "100%";

            gridCell.addEventListener("click", () => {
                gridCell.classList.toggle("filled");
            })
            /*
            gridCell.addEventListener("mouseenter", () => {
                gridCell.classList.add("hover");
            })
            gridCell.addEventListener("mouseleave", () => {
                gridCell.classList.remove("hover");
            })
            */
            gridContainer.appendChild(gridCell);
        }
    }
    mainContainer.appendChild(gridContainer);
}

function hoverEffect(element) {


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

function changeSize() {
    let userSize = prompt("How many squares per side?");
    userSize = parseInt(userSize);

    removeAllChildNodes(gridContainer);
    mainContainer.removeChild(gridContainer); 

    createGrid(userSize);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
