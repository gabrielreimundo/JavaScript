function add() {
    let num = document.getElementById('txtn')
    let selc = document.getElementById('selnum')
    let val = []

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        val.push(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${val} adicionado`
    }
}
/*var campo = document.querySelector("input")
var but = document.querySelector("button")
var medicamentos = [];

but.onclick = function(){
    medicamentos.push(campo.value);
    console.log(medicamentos);
}*/