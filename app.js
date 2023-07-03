const board = document.querySelector('#board');
const squaresNum = 3600;

for (let i = 0; i < squaresNum; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(el) {
  const numColor = randomColor();
  const numColor2 = randomColor();
  const numColor3 = randomColor();
  el.style.backgroundColor = `#${numColor}${numColor2}${numColor3}`;
  el.style.boxShadow = `0 0 2px #${numColor}${numColor2}${numColor3}, 0 0 10px #${numColor}${numColor2}${numColor3}`;
}

function removeColor(el) {
  el.style.backgroundColor = '#1d1d1d';
  el.style.boxShadow = '0 0 2px #000';
}

function randomColor() {
  const num = Math.floor(Math.random() * 9);
  return num;
}
