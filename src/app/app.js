const gridWidth = document.querySelector('#grid-width'),
  gridHeight = document.querySelector('#grid-height'),
  gridHeightValue = document.querySelector('.grid-height-value'),
  gridWidthValue = document.querySelector('.grid-width-value');

let gridColumns = 1;
let gridRows = 1;

function changeSize(e) {
  if (e.target.id === 'grid-height') {
    gridRows = e.target.value;
    e.target.value > 9
      ? (gridHeightValue.textContent = e.target.value)
      : (gridHeightValue.textContent = `0${e.target.value}`);
  } else {
    gridColumns = e.target.value;
    e.target.value > 9
      ? (gridWidthValue.textContent = e.target.value)
      : (gridWidthValue.textContent = `0${e.target.value}`);
  }
}

gridHeight.addEventListener('input', (e) => {
  changeSize(e);
});
gridWidth.addEventListener('input', (e) => {
  changeSize(e);
});

function squareModification(e, d) {
  if (e.type == 'click') {
    if (paintFlag) {
      d.style.backgroundColor = `${colorInput.value}`;
    } else {
      d.style.backgroundColor = 'transparent';
    }
  } else {
    if (paintFlag && drawFLag) {
      d.style.backgroundColor = `${colorInput.value}`;
    } else if (!paintFlag && drawFLag) {
      d.style.backgroundColor = 'transparent';
    }
  }
}

function clearGrid() {
  grid.innerHTML = '';
}
function createGrid() {
  grid.innerHTML = '';

  for (let i = 0; i < gridRows; i++) {
    const gridColumn = document.createElement('div');
    gridColumn.classList.add('grid-column');
    for (let j = 0; j < gridColumns; j++) {
      const div = document.createElement('div');
      gridColumn.appendChild(div);
    }
    grid.appendChild(gridColumn);
  }
  const divArray = document.querySelectorAll('.grid-column div');
  divArray.forEach((div) => {
    div.addEventListener('mousemove', (e) => squareModification(e, div));
    div.addEventListener('click', (e) => squareModification(e, div));
  });
}
let paintFlag = true;
let drawFLag = false;

const createGridButton = document.querySelector('.create-grid'),
  clearGridButton = document.querySelector('.clear-grid'),
  grid = document.querySelector('.grid'),
  paintButton = document.querySelector('.paint'),
  eraseButton = document.querySelector('.erase'),
  colorInput = document.querySelector('#color-picker');

paintButton.addEventListener('click', () => {
  paintFlag = true;
  eraseButton.classList.remove('active');
  paintButton.classList.add('active');
});
eraseButton.addEventListener('click', () => {
  paintFlag = false;
  eraseButton.classList.add('active');
  paintButton.classList.remove('active');
});

grid.addEventListener('mousedown', () => (drawFLag = true));
grid.addEventListener('mouseup', () => (drawFLag = false));
grid.addEventListener('mouseleave', () => (drawFLag = false));
grid.addEventListener('dragstart', (e) => e.preventDefault());

createGridButton.addEventListener('click', createGrid);
clearGridButton.addEventListener('click', clearGrid);
