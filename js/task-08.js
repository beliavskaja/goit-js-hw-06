
document.querySelector('form.login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = [...event.target.elements].filter(x => x.outerText !== 'Login');
    
    if (fields.some(x => !x.value.length)) {
        alert('Fill all fields');
    } else {
        const result = {};
        fields.forEach(x => {
            result[x.name] = x.value
        })
        console.log(result)
    }
})