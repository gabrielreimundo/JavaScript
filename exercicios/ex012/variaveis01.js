// Variaveis simples so armazenam um valor por vez
// Variaveis compostas são capazes de armazenar varios valores 
// Variaveis compostas sempre começam com o indice 0

let num = [5, 6, 7, 8 ]
console.log(`Nosso vetor é o ${num}`)
num.push(3)//para adicionar valor
console.log(`vetor ${num}`)
console.log(`Nosso vetor é o ${num.length}`)//.length para ver a quantidade de posições
console.log(`Nosso vetor é o ${num.sort()}`)//.sort para colocar em ordem crescente
console.log(`Nosso vetor é o ${num[3]}`) //para mostrar algum valor de uma posição especifica
let pos = num.indexOf(8)// indexOf() pesquisa a posição em que se encontra o valor
console.log(`O valor 8 esta na ${pos}`)