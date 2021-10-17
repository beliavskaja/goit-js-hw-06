document.getElementById('name-input').addEventListener('input', (event) => {
    const value = event.target.value;

    document.getElementById('name-output').textContent = (value && value.length) ? `${value}` : 'Anonymous';
})