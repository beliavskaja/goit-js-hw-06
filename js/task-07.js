document.getElementById('font-size-control').addEventListener('input', (event) => {
    const value = event.target.value;
    document.getElementById('text').style.fontSize = `${value}px`;
})