var carrinho = document.querySelector('[data-carrinho]')
var quantidade = document.querySelector('[data-qtd]')
var check = document.getElementsByName('produto')
var modalFinale = document.querySelector('[data-finale]')
var cartValue = document.querySelector('[data-cartValue]')
var valorTotal = document.querySelector('[data-message]')

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
var i
var nomeProduto = []
var valorDesse = []
var valorUnit = []

//MOSTRAR MODAL INSERIR NO CARRINHO
function showFinale(){
    modalFinale.classList.remove('hide')
    modalFinale.classList.add('finale')
}
function hideFinale(){
    modalFinale.classList.remove('finale')
    modalFinale.classList.add('hide')
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
    valor = 4
    if(misto.checked){
        showFinale()
        esseProduto = "Misto Quente"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
        document.querySelector('.misto').style.background = 'radial-gradient(#fff, #fec208)'
    }
    if(misto.checked == false){
        hideFinale()
        document.querySelector('.misto').style.background = '#cf240a'
    }
})
bomba.addEventListener("click", () => {
    valor = 8
    if(bomba.checked){
        showFinale()
        esseProduto = "X-Bomba"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
        document.querySelector('.bomba').style.background = 'radial-gradient(#fff, #fec208)'
    }
    if(bomba.checked == false){
        hideFinale()
        document.querySelector('.bomba').style.background = '#cf240a'
    }
})
tudo.addEventListener("click", () => {
    valor = 17
    if(tudo.checked){
        showFinale()
        esseProduto = "X-Tudo"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
        document.querySelector('.tudo').style.background = 'radial-gradient(#fff, #fec208)'
    }
    if(tudo.checked == false){
        hideFinale()
        document.querySelector('.tudo').style.background = '#cf240a'
    }
})
frango.addEventListener("click", () => {
    valor = 19
    if(frango.checked){
        showFinale()
        esseProduto = "X-Tudo de Frango"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
        document.querySelector('.frango').style.background = 'radial-gradient(#fff, #fec208)'
    }
    if(frango.checked == false){
        hideFinale()
        document.querySelector('.frango').style.background = '#cf240a'
    }
})
brocado.addEventListener("click", () => {
    valor = 25
    if(brocado.checked){
        showFinale()
        esseProduto = "X-Brocado"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
        document.querySelector('.brocado').style.background = 'radial-gradient(#fff, #fec208)'
    }
    if(brocado.checked == false){
        hideFinale()
        document.querySelector('.brocado').style.background = '#cf240a'
    }
})
mara.addEventListener("click", () => {
    valor = 6
    if(mara.checked){
        showFinale()
        esseProduto = "Suco de Maracujá"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
        document.querySelector('.mara').style.background = 'radial-gradient(#fff, #fec208)'
    }
    if(mara.checked == false){
        hideFinale()
        document.querySelector('.mara').style.background = '#cf240a'
    }
})
laranja.addEventListener("click", () => {
    valor = 6
    if(laranja.checked){
        showFinale()
        esseProduto = "Suco de Laranja"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
        document.querySelector('.laranja').style.background = 'radial-gradient(#fff, #fec208)'
    }
    if(laranja.checked == false){
        hideFinale()
        document.querySelector('.laranja').style.background = '#cf240a'
    }
})
limao.addEventListener("click", () => {
    valor = 6
    if(limao.checked){
        showFinale()
        esseProduto = "Suco de Limão"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
        document.querySelector('.limao').style.background = 'radial-gradient(#fff, #fec208)'
    }
    if(limao.checked == false){
        hideFinale()
        document.querySelector('.limao').style.background = '#cf240a'
    }
})
refri.addEventListener("click", () => {
    valor = 5
    if(refri.checked){
        showFinale()
        esseProduto = "Refrigerante Lata"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
        document.querySelector('.refri').style.background = 'radial-gradient(#fff, #fec208)'
    }
    if(refri.checked == false){
        hideFinale()
        document.querySelector('.refri').style.background = '#cf240a'
    }
})
heineken.addEventListener("click", () => {
    valor = 8
    if(heineken.checked){
        showFinale()
        esseProduto = "Heineken Long Neck"
        resume.innerHTML = `<p>${esseProduto} | R$ ${valor.toFixed(2)}`
        document.querySelector('.heineken').style.background = 'radial-gradient(#fff, #fec208)'
    }
    if(heineken.checked == false){
        hideFinale()
        document.querySelector('.heineken').style.background = '#cf240a'
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
    
    valorTotal.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`
    alert(`${esseProduto} adicionado ao carrinho`)
})

//BOTAO FECHAR MODAL
fecharModal.addEventListener("click", () => {
    modalFinale.classList.remove('finale')
    modalFinale.classList.toggle('hide')
})

// CARRINHO

//EDITAR OU EXCLUIR PEDIDO
function preencheTabela(nome, unit, desse){
    let j = 0
    for(let a = 1; a < pedidos.rows.length; a++){
        j++
    }
    nomeProduto[j] = nome
    valorDesse[j] = desse
    valorUnit[j] = unit
    
    console.log(nomeProduto, valorDesse, valorUnit);
    
    for(let c = 1; c < pedidos.rows.length; c++){

        pedidos.rows[j].cells[5].onclick = () => {
            if(confirm(`Deseja excluir ${nomeProduto[j]} do carrinho?`)){
                total = total - valorDesse[j]
                valorTotal.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`
                pedidos.deleteRow(j)
                enquanto = enquanto - 1
                cartValue.innerText = enquanto
                j--
            }
        }
        pedidos.rows[j].cells[6].onclick = () => {
            if(confirm(`Deseja alterar a quantidade de ${nomeProduto[c]}`)){
                let qtdAlt =  parseInt(prompt('Digite a nova quantidade:'))
                console.log(qtdAlt);
                let valorAlterado = parseInt(valorUnit[j]) * qtdAlt
                pedidos.rows[j].cells[2].innerHTML = qtdAlt
                pedidos.rows[j].cells[4].innerHTML = valorAlterado.toFixed(2).replace('.', ',')

                valorTotal.innerText = `R$ ${((total - parseInt(valorUnit[c])) + valorAlterado).toFixed(2).replace('.', ',')}`
                qtdAlt = 0
            }
        }
    }
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
    var cellErase = linha.insertCell(5)
    var cellEdit = linha.insertCell(6)
    
    cellCod.innerHTML = qtdLinhas;
    cellProduto.innerHTML = produto
    cellQtd.innerHTML = qtd
    cellVal.innerHTML = val
    cellValT.innerHTML = valt
    cellErase.innerHTML = "<div class='edit'><button><img src='src/img/erase.png' title='apagar ítem'></button></div>"
    cellEdit.innerHTML = "<div class='edit'><button><img src='src/img/edit.png' title='apagar ítem'></button></div>"

    preencheTabela(produto, val, valt)

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