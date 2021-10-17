function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
document.querySelector('button.change-color').addEventListener('click', (event) => {
    document.querySelector('span.color').textContent = `${getRandomHexColor()}`;
    document.querySelector('body').style.background = `${getRandomHexColor()}`;
})