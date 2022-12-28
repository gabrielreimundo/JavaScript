let num = document.getElementById('txtn')
let selc = document.getElementById('selnum')
let res = document.querySelector('div#res')
let val = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumero(num.value) && !inLista(num.value)) {
        
    } else {
        window.alert('Valor invalido!')
    }
}