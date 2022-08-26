var quantidade = document.querySelector('[data-qtd]')
var check = document.getElementsByName('produto')
var modalFinale = document.querySelector('[data-finale]')

var resume = document.querySelector('[data-resume]')
var misto = document.querySelector('[data-misto]')
var bomba = document.querySelector('[data-bomba]')
var tudo = document.querySelector('[data-tudo]')
var frango = document.querySelector('[data-frango]')
var brocado = document.querySelector('[data-brocado]')
var mara = document.querySelector('[data-sucoMara]')
var laranja = document.querySelector('[data-sucoLaranja]')
var limao = document.querySelector('[data-sucoLimao]')
var refri = document.querySelector('[data-refri]')
var heineken = document.querySelector('[data-heineken]')
var pedidos = document.querySelector('[data-tabelaPedidos]')
var valor = 0

misto.addEventListener("click", () => {
    valor = 4
    if(misto.checked == true){
        var esseProduto = "Misto Quente"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})
bomba.addEventListener("click", () => {
    valor = 8
    if(bomba.checked == true){
        var esseProduto = "X-Bomba"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})
tudo.addEventListener("click", () => {
    valor = 17
    if(tudo.checked == true){
        var esseProduto = "X-Tudo"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})
frango.addEventListener("click", () => {
    valor = 19
    if(misto.checked == true){
        var esseProduto = "X-Tudo de Frango"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})
brocado.addEventListener("click", () => {
    valor = 25
    if(brocado.checked == true){
        var esseProduto = "X-Brocado"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})
mara.addEventListener("click", () => {
    valor = 6
    if(mara.checked == true){
        var esseProduto = "Suco de Maracujá"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})
laranja.addEventListener("click", () => {
    valor = 6
    if(laranja.checked == true){
        var esseProduto = "Suco de Laranja"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})
limao.addEventListener("click", () => {
    valor = 6
    if(limao.checked == true){
        var esseProduto = "Suco de Limão"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})
refri.addEventListener("click", () => {
    valor = 5
    if(refri.checked == true){
        var esseProduto = "Refrigerante Lata"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})
heineken.addEventListener("click", () => {
    valor = 8
    if(heineken.checked == true){
        var esseProduto = "Heineken Long Neck"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})

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

check.forEach(addEventListener("click", () => {
    modalFinale.classList.remove('hide')
    modalFinale.classList.add('finale')
}))


function step(botao){
    let id = botao.getAttribute("id")
    let value = quantidade.getAttribute("value")
    let step = quantidade.getAttribute("step")
    let calcStep = (id == "dim") ? (step * -1) : (step * 1)
    let newValue = parseInt(value) + calcStep
    
    quantidade.setAttribute("value", newValue)
}

document.querySelector('[data-button]').addEventListener("click", () =>{
    let essaQtd = quantidade.getAttribute('value')
    cart(esseProduto, essaQtd, valor.toFixed(2), (valor*essaQtd).toFixed(2))

    quantidade.setAttribute("value", 0)
})

function close() {
    modalFinale.classList.remove('finale')
    modalFinale.classList.add('hide')
}