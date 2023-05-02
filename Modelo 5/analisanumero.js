let inpNumero = document.querySelector('input#inpNum')

let lista = document.querySelector('#selNum')

let botaoAdicionar = document.querySelector('#botaoAdd')
let botaoFinalizar = document.querySelector('#botaoFin')

let resultado = document.querySelector('#divRes')

botaoAdicionar.addEventListener("click", Adiciona_numero)
botaoFinalizar.addEventListener("click", Finalizar)

let numeros = [] 

function Valida_numero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function Valida_lista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function Adiciona_numero() {   
    if(Valida_numero(inpNumero.value) && !Valida_lista(inpNumero.value, numeros)) {
        numeros.push(Number(inpNumero.value))
        let item = document.createElement("option")
        item.text = `Valor ${inpNumero.value} foi adicionado` 
        lista.appendChild(item)
    } else {
        window.alert('Valor invalido ou ja encontrado na lista')
    }
    inpNumero.value = ''
    inpNumero.focus()
    resultado.innerHTML = " "
}

function Finalizar() {
    if(numeros.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let totalNumeros = numeros.length
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let media = 0

        for(let pos = 0; pos < numeros.length; pos++) {
            soma += numeros[pos]
                if (numeros[pos] > maior)
                maior = numeros[pos]
                if (numeros[pos] < menor)
                menor = numeros[pos]
        }
         media = soma / totalNumeros
        resultado.innerHTML = ''
        resultado.innerHTML += `Ao todo tem ${totalNumeros} numeros`
        resultado.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        resultado.innerHTML += `<p> A soma de todos os numeros é ${soma}.</p>`
        resultado.innerHTML += `<p> A media de todos os numeros é ${media}.</p>`
    }
}
