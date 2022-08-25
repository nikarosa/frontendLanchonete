var slide = document.querySelector('[data-slide')
var imagens = document.querySelectorAll('.slide img')

let currentSlide = 0

function carousel(){
    currentSlide++
    if(currentSlide > imagens.length -1){
        currentSlide = 0
    }
    slide.style.transform = `translateX(${currentSlide * -100}%)`
}

setInterval(carousel, 4000)