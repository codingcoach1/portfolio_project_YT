let btn = document.querySelector('button')
let body = document.querySelector('body')


btn.addEventListener('click',function(){
    if(body.style.backgroundColor == 'black'){
        body.style.backgroundColor = 'white';
        btn.style.backgroundColor = 'black'
        btn.style.color = 'white'
    }
    else{
        body.style.backgroundColor = 'black';
        btn.style.backgroundColor = 'white'
        btn.style.color = 'black'
    }
})