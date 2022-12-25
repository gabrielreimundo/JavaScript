// Funções são ações executadas assim que são chamadas ou em decorrencia de algum evento. 
// Funções podem receber parametros e retornar um resultado.

function parimpar(n) {
    if (n%2 == 0){
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

console.log(parimpar(8))