var carrinho = document.querySelector('[data-carrinho]')
var quantidade = document.querySelector('[data-qtd]')
var check = document.getElementsByName('produto')
var modalFinale = document.querySelector('[data-finale]')
var cartValue = document.querySelector('[data-cartValue]')

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
var fecharModal = document.querySelector('.close')
var ingredientes = document.querySelectorAll('[data-ingrediente]')
var largura = window.innerWidth

var total = 0
var valor = 0
var esseProduto
var enquanto = 0
var i = 0

//MOSTRAR MODAL INSERIR NO CARRINHO
function showFinale(){
    modalFinale.classList.remove('hide')
    modalFinale.classList.add('finale')
}

//PRODUTOS

//TRATAR INGREDIENTES
if(largura <= 800){
    ingredientes.forEach((elemento) => {elemento.classList.remove("ingredientes")})
    ingredientes.forEach((elemento) => {elemento.classList.add("hide")}) 
}else if(largura > 800){
    ingredientes.forEach((elemento) => {elemento.classList.remove("hide")}) 
    ingredientes.forEach((elemento) => {elemento.classList.add("ingredientes")})
}

//SELECIONAR PRODUTO
misto.addEventListener("click", () => {
    showFinale()
    valor = 4
    if(misto.checked == true){
        esseProduto = "Misto Quente"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})
bomba.addEventListener("click", () => {
    showFinale()
    valor = 8
    if(bomba.checked == true){
        esseProduto = "X-Bomba"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})
tudo.addEventListener("click", () => {
    showFinale()
    valor = 17
    if(tudo.checked == true){
        esseProduto = "X-Tudo"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})
frango.addEventListener("click", () => {
    showFinale()
    valor = 19
    if(frango.checked == true){
        esseProduto = "X-Tudo de Frango"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})
brocado.addEventListener("click", () => {
    showFinale()
    valor = 25
    if(brocado.checked == true){
        esseProduto = "X-Brocado"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})
mara.addEventListener("click", () => {
    showFinale()
    valor = 6
    if(mara.checked == true){
        esseProduto = "Suco de Maracujá"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})
laranja.addEventListener("click", () => {
    showFinale()
    valor = 6
    if(laranja.checked == true){
        esseProduto = "Suco de Laranja"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})
limao.addEventListener("click", () => {
    showFinale()
    valor = 6
    if(limao.checked == true){
        esseProduto = "Suco de Limão"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})
refri.addEventListener("click", () => {
    showFinale()
    valor = 5
    if(refri.checked == true){
        esseProduto = "Refrigerante Lata"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})
heineken.addEventListener("click", () => {
    showFinale()
    valor = 8
    if(heineken.checked == true){
        esseProduto = "Heineken Long Neck"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
    }
})

// MODAL INSERIR NO CARRINHO

//BOTAO QUANTIDADE
function step(botao){
    let id = botao.getAttribute("id")
    let value = quantidade.getAttribute("value")
    let step = quantidade.getAttribute("step")
    let calcStep = (id == "dim") ? (step * -1) : (step * 1)
    let newValue = parseInt(value) + calcStep
    quantidade.setAttribute("value", newValue)
}

//BOTAO INSERIR
document.querySelector('[data-insert]').addEventListener('click', () => {
    let essaQtd = quantidade.getAttribute('value')
    let totalI = valor*essaQtd
    cart(esseProduto, essaQtd, valor.toFixed(2).replace('.', ','), totalI.toFixed(2))

    enquanto = enquanto + 1
    cartValue.innerText = (enquanto)

    total = total + totalI

    cartValue.classList.remove('hide')
    cartValue.classList.add('showCartValue')
    
    document.querySelector('[data-message]').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`
    console.log(total);
})

//BOTAO FECHAR MODAL
fecharModal.addEventListener("click", () => {
    modalFinale.classList.remove('finale')
    modalFinale.classList.toggle('hide')
})

// CARRINHO

//EDITAR OU EXCLUIR PEDIDO
function eraser(linha, oValor){
    oValor = document.getElementById('valorAqui')
    total = total - oValor.value
    document.querySelector('[data-message]').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`
    linha.closest('tr').remove()
    enquanto = enquanto - 1
    cartValue.innerText = enquanto
    console.log(total);
}

//TABELA PEDIDOS
function cart(produto, qtd, val, valt){
    
    var qtdLinhas = pedidos.rows.length
    var linha = pedidos.insertRow(qtdLinhas)
    
    var cellCod = linha.insertCell(0)
    var cellProduto = linha.insertCell(1)
    var cellQtd = linha.insertCell(2)
    var cellVal = linha.insertCell(3)
    var cellValT = linha.insertCell(4)
    var cellEdit = linha.insertCell(5)
    
    cellCod.innerHTML = qtdLinhas;
    cellProduto.innerHTML = produto
    cellQtd.innerHTML = qtd
    cellVal.innerHTML = val
    i = i + 1
    let vT = `<input type='number' value='${valt}' id='valorAqui' readonly></input>`
    cellValT.innerHTML = vT
    cellEdit.innerHTML = "<div class='edit'><button><img src='src/img/erase.png' title='apagar ítem' onclick='eraser(event.target, event.target)'></button></div>"

}

//BOTAO ACESSAR CARRINHO
document.querySelector('[data-cart]').addEventListener('click', () => {
    carrinho.classList.remove('hide')
    carrinho.classList.add('modalConfirm')

    modalFinale.classList.remove('finale')
    modalFinale.classList.add('hide')
})

//BOTAO SAIR DO CARRINHO
document.querySelector('[data-back]').addEventListener('click', () => {
    carrinho.classList.remove('modalConfirm')
    carrinho.classList.add('hide')
})