var slide = document.querySelector('[data-slide')
var imagens = document.querySelectorAll('.slide img')
var loading = document.querySelector('[data-loading]')
var part1 = document.querySelector('[data-part1]')
var part2 = document.querySelector('[data-part2]')

setTimeout(() => {
    loading.classList.remove('loading')
    loading.classList.toggle('hide')
    document.querySelector('[data-svg]').style.display = 'none'
}, 3000)

let currentSlide = 0

function carousel(){
    currentSlide++
    if(currentSlide > imagens.length -1){
        currentSlide = 0
    }
    slide.style.transform = `translateX(${currentSlide * -100}%)`
}

setInterval(carousel, 4000)

window.addEventListener('scroll', () => {
    let windowTop = window.pageYOffset
    if((windowTop) > (part1.offsetTop - 300)){
        part1.classList.add('anima1')
    }
    if((windowTop) < (part1.offsetTop + 300)){
        part1.classList.remove('anima1')
    }
    if((windowTop) > (part2.offsetTop - 300)){
        part2.classList.add('anima2')
    }
    if((windowTop) < (part2.offsetTop + 100)){
        part2.classList.remove('anima2')
    }
})