let img = document.querySelector('img')
let next = document.querySelector('#next')
let pre = document.querySelector('#pre')
let count = 0

let pics = [
    'https://images.unsplash.com/photo-1756291822310-ec60c0a4b0c5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1760570317569-4a2b1eddf174?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1761839258045-6ef373ab82a7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];



next.addEventListener('click',function(){
    img.setAttribute('src',`${pics[count]}`)
    img.style.height = '300px'
    img.style.width = '500px'
    count++
    if(count>pics.length-1){
        count = 0
    }
    
})
pre.addEventListener('click',function(){
    img.setAttribute('src',`${pics[count]}`)
    img.style.height = '300px'
    img.style.width = '500px'
    count--
    if(count<0){
        count = pics.length-1
    }
    
})

