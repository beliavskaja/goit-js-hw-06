let counterValue = 0;

function updateValue(value) {
    document.querySelector('#value').textContent = `${value}`;
}

document.querySelectorAll('#counter button').forEach(element => {
    element.addEventListener('click', (event) => {
        const dataAction = event.target.getAttribute("data-action");

        const newValue = dataAction === 'decrement' ? --counterValue : ++counterValue;
    
        updateValue(newValue);
    })
});