const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let listElements = document.querySelector('#ingredients');
ingredients.forEach(ingredient => {
  const liElements = document.createElement('li');
  liElements.textContent = ingredient;
  liElements.classList.add('item');
  listElements.append(liElements);
});
