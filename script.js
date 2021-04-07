var header=document.querySelector('.header');
var nav=document.querySelector('.nav')
window.addEventListener('scroll', ()=>{
    if(document.body.scrollTop==400 || document.documentElement.scrollTop > 400){
        // nav.style.display='flex'
        // header.style.display='none'
    }
    else{
        // nav.style.display='none'
        // header.style.display='flex'
    }
})


var bioIems = document.querySelectorAll('.bio')
bioIems.forEach(bioItem => {
  bioItem.addEventListener('mouseover', ()=>{
    bioItem.childNodes[1].classList.add('img-darken')
  })
  bioItem.addEventListener('mouseout', ()=>{
    bioItem.childNodes[1].classList.remove('img-darken')
  })
})


var image1=document.querySelector('.dis')

image1.addEventListener('mouseover', ()=>{
    
        header.classList.add('imgclass')
        

    
})
image1.addEventListener('mouseout', ()=>{
    
    header.classList.remove('imgclass')


})

var hamb=document.querySelector('.hamb')
var navLink=document.querySelector('.nav-items')
var links= document.querySelectorAll('.nav-items li')
hamb.addEventListener('click',()=>{
    
    navLink.classList.toggle('open')
})

