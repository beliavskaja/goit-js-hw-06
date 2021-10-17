function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let w = 30;
  let h = 30;
  const box = document.getElementById('boxes');
  for (let i = 0; i < amount; i++) {
    const element = document.createElement('div');
    element.style.background = `${getRandomHexColor()}`;
    element.style.width = `${w}px`;
    element.style.height = `${h}px`;
    w += 10;
    h += 10;

    box.append(element);
  }
  
}

document.querySelectorAll('#controls button').forEach(element => {
  element.addEventListener('click', (event) => {
    if (event.target.getAttribute("data-create") !== null) {
      const size = document.querySelector('#controls input').value || 0;
      createBoxes(size);
    }


    if (event.target.getAttribute("data-destroy") !== null) {
      document.getElementById('boxes').innerHTML = '';
    }
  })
})
