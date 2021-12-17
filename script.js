let gridContainer = document.getElementById('gridContainer');
let sizeSelectorRange = document.getElementById(`sizeSelectorRange`);
let gridSizeText = document.getElementById(`gridSizeText`)
let resetBtn = document.getElementById(`reset`);

function createGridItem() {
    let gridItem = document.createElement('section');
    gridItem.classList.add(`gridItem`);
    gridContainer.appendChild(gridItem);

}

function addGridElements(elemCount) {
    for (let i = 0; i < elemCount; i++) {
        createGridItem();
    }
}

function setGridSize(elemCount) {
    let squareRootValue = Math.sqrt(elemCount);
    gridContainer.style['gridTemplateColumns'] = `repeat(${squareRootValue}, 1fr)`;
}

function deleteGridItems() {
    gridContainer.textContent = '';
}

function updateGridItems() {
    let gridItems = document.querySelectorAll(`.gridItem`);
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', () => {
            console.log(gridItem);
            gridItem.style.backgroundColor = generateRandomColor();
        });
    });
}

function generateRandomColor() {
    let x = Math.random();
    let color;
    switch (true) {
        case x < 0.25:
            color = '#FF6978';
            break;
        case x < 0.50:
            color = '#FFFCF9';
            break;
        case x < 0.75:
            color = '#B1EDE8';
            break;
        default:
            color = '#6D435A';
            break;
    }
    return color;
}

function resetGrid() {
    deleteGridItems()
    addGridElements(4);
    setGridSize(4);
    updateGridItems();
    sizeSelectorRange.value = 2;
    gridSizeText.textContent = sizeSelectorRange.value;
}

sizeSelectorRange.addEventListener('input', () => {
    gridSizeText.textContent = sizeSelectorRange.value;
    deleteGridItems();
    addGridElements(sizeSelectorRange.value ** 2);
    setGridSize(sizeSelectorRange.value ** 2);
    updateGridItems()
});

resetBtn.addEventListener('click', resetGrid)
resetGrid();