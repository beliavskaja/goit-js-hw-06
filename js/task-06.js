const inputElement = document.getElementById('validation-input');

inputElement.addEventListener('blur', (event) => {
    const inputLength = event.target.getAttribute("data-length");
    
    if (inputLength == event.target.value.length) {
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
    } else {
        inputElement.classList.remove('valid');
        inputElement.classList.add('invalid');
    }
})