const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let listElements = document.querySelector('#ingredients');
const fragment = document.createDocumentFragment();
ingredients.forEach(ingredient => {
  const liElements = document.createElement('li');
  liElements.textContent = ingredient;
  liElements.classList.add('item');
  fragment.append(liElements);
});
listElements.append(fragment);