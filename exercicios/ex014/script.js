let num = document.getElementById('txtn')
let selc = document.getElementById('selnum')
let res = document.querySelector('div#res')
let val = []

function isNumero(n) {//verificar se esta entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {//verificar se ja esta na lista
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {//adicionar
    if (isNumero(num.value) && !inLista(num.value, val)) {
        val.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        selc.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {   //finalizar
    if(val.length == 0) {
        window.alert('Adicione valores ANTES DE FINALIZAR!')
    } else {
        let tot = val.length
        let maior  = val[0]
        let menor = val[0]
        let soma = 0
        let media =0
        for (let pos in val) {
            soma += val[pos]
            if (val[pos] > maior)//ver qual e maior
                maior = val[pos]
            if (val[pos] < menor)//ver qual e o menor
                menor = val[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A media de todos o valores é ${media}.</p>`
    }
}