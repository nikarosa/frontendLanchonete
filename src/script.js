var bomba = document.querySelector('[data-bomba]')
var frango = document.querySelector('[data-frango]')
var artesanal = document.querySelector('[data-artesanal]')
var chapa = document.querySelector('[data-chapa]')
var molho = document.querySelector('[data-molho]')
var sucoMara = document.querySelector('[data-sucoMara]')
var sucoCaja = document.querySelector('[data-sucoCaja')
var refri = document.querySelector('[data-refri]')
var heineken = document.querySelector('[data-heineken]')
var final = document.querySelector('[data-final]')

function valorTotal() {
    var somaTotal = 0

    if (bomba.checked == true) {
        somaTotal = somaTotal + 9.99
    }
    if (frango.checked == true) {
        somaTotal = somaTotal + 14.99
    }
    if (chapa.checked == true) {
        somaTotal = somaTotal + 7.99
    }
    if (sucoMara.checked == true) {
        somaTotal = somaTotal + 5.99
    }
    if (sucoCaja.checked == true) {
        somaTotal = somaTotal + 5.99
    }
    if (refri.checked == true) {
        somaTotal = somaTotal + 4.99
    }
    if (heineken.checked == true) {
        somaTotal = somaTotal + 8.99
    }
    
    console.log(somaTotal);
}
