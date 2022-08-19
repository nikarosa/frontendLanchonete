var bomba = document.querySelector('[data-bomba]')
var frango = document.querySelector('[data-frango]')
var artesanal = document.querySelector('[data-artesanal]')
var chapa = document.querySelector('[data-chapa]')
var molho = document.querySelector('[data-molho]')
var sucoMara = document.querySelector('[data-sucoMara]')
var sucoCaja = document.querySelector('[data-sucoCaja')
var refri = document.querySelector('[data-refri]')
var heineken = document.querySelector('[data-heineken]')

var modal = document.querySelector('[data-modalConfirm]')
var message = document.querySelector('[data-message]')
var confirm = document.querySelector('[data-confirm]')

var qtdBomba = document.querySelector('[data-qtdBomba]')
var qtdFrango = document.querySelector('[data-qtdFrango]')
var qtdArtesanal = document.querySelector('[data-qtdArtesanal]')
var qtdChapa = document.querySelector('[data-qtdChapa]')
var qtdMolho = document.querySelector('[data-qtdMolho]')
var qtdMara = document.querySelector('[data-qtdMara]')
var qtdCaja = document.querySelector('[data-qtdCaja]')
var qtdRefri = document.querySelector('[data-qtdRefri]')
var qtdHeineken = document.querySelector('[data-qtdHeineken]')

var tabela = document.querySelector('[data-tabela]')
var pedidos = document.querySelector('[data-tabelaPedidos]')
var botao = document.querySelector('[data-button]')

var qtd = document.getElementsByName("qtd")

function confirmarValor(){
    
    function cart(produto, qtd, val, valt){
        
        var qtdLinhas = pedidos.rows.length
        var linha = pedidos.insertRow(qtdLinhas)
        
        var cellCod = linha.insertCell(0)
        var cellProduto = linha.insertCell(1)
        var cellQtd = linha.insertCell(2)
        var cellVal = linha.insertCell(3)
        var cellValT = linha.insertCell(4)
        
        cellCod.innerHTML = qtdLinhas;
        cellProduto.innerHTML = produto
        cellQtd.innerHTML = qtd
        cellVal.innerHTML = val
        cellValT.innerHTML = valt
    }
    
    var somaTotal = 0
    if (bomba.checked == true) {
        somaTotal = somaTotal + (9.99*qtdBomba.value)
        cart("X-Bomba", qtdBomba.value, 9.99, (9.99*qtdBomba.value).toFixed(2))
    }
    if (frango.checked == true) {
        somaTotal = somaTotal + (14.99*qtdFrango.value)
        cart("X-Tudo de Frango", qtdFrango.value, 14.99, (14.99*qtdFrango.value).toFixed(2))
    }
    if(artesanal.checked == true){
        somaTotal = somaTotal + (24.99*qtdArtesanal.value)
        cart("Artesanal de Picanha", qtdArtesanal.value, 24.99, (qtdArtesanal.value*24.99).toFixed(2))
    }
    if (chapa.checked == true) {
        somaTotal = somaTotal + (7.99*qtdChapa)
        cart("Dog na Chapa", qtdChapa.value, 7.99, (7.99*qtdChapa.value).toFixed(2))
    }
    if(molho.checked == true){
        somaTotal = somaTotal + (7.99*qtdMolho.value)
        cart("Dog no Molho", qtdMolho.value, 7.99, (7.99*qtdMolho.value).toFixed(2))
    }
    if (sucoMara.checked == true) {
        somaTotal = somaTotal + (5.99*qtdMara)
        cart("Suco de Maracujá", qtdMara.value, 5.99, (5.99*qtdMara.value).toFixed(2))
    }
    if (sucoCaja.checked == true) {
        somaTotal = somaTotal + (5.99*qtdCaja)
        cart("Suco de Cajá", qtdCaja.value, 5.99, (5.99*qtdCaja.value).toFixed(2))
    }
    if (refri.checked == true) {
        somaTotal = somaTotal + (4.99*qtdRefri)
        cart("Refrigerante Lata", qtdRefri.value, 4.99, (4.99*qtdRefri.value).toFixed(2))
    }
    if (heineken.checked == true)  {
        somaTotal = somaTotal + (8.99*qtdRefri)
        cart("Heineken Long Neck", qtdHeineken.value, 8.99, (8.99*qtdHeineken.value).toFixed(2))
    }

    modal.classList.remove("hide")
    modal.classList.add("modalConfirm")

    message.innerHTML = `R$ ${somaTotal}`
    console.log(pedidos.rows.length);
}

function voltar(){
    somaTotal = 0

    bomba.checked = false
    frango.checked = false
    artesanal.checked = false
    chapa.checked = false
    molho.checked = false
    sucoMara.checked = false
    sucoCaja.checked = false
    refri.checked = false
    heineken.checked = false

    qtdArtesanal.value = ""
    qtdBomba.value = ""
    qtdCaja.value = ""
    qtdChapa.value = ""
    qtdMara.value = ""
    qtdMolho.value = ""
    qtdHeineken.value = ""
    qtdFrango.value = ""
    qtdRefri.value = ""
    
    modal.classList.remove("modalConfirm")
    modal.classList.add("hide")

    for (let i = 1; pedidos.rows.length > 0; i++){
        pedidos.deleteRow(i)
    }

}

document.addEventListener("keypress", function(e){

    if(e.key === "Enter"){
        botao.click()
    }
})