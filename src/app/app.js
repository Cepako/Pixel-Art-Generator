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
