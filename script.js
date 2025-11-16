let text = document.querySelector('#text');
let count = document.querySelector('span');
let warn = document.querySelector('p');

text.addEventListener('input', function () {
    let length = text.value.length;
    count.innerHTML = length;   // Count ALWAYS visible

    // Limit cross — RED mode
    if (length > 10) {
        text.style.color = 'red';
        count.style.color = 'red';
        warn.innerHTML = `<span style="color:red">${length}</span>/100 - Limit Over`;
        warn.style.color = 'red';
    }
    // Limit normal — RESET mode
    else {
        text.style.color = 'black';
        count.style.color = 'black';
        if(length<=10)
        warn.innerHTML = `<span>${length}</span>/100`;   
        warn.style.color='white'
    }
});
