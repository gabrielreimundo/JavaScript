function contar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pa = document.getElementById('passo')
    var res = document.getElementById('res')
    var c = 0
    while (ini <= fim){
      c = ini + pa
      res.innerHTML = '...'+ c
    }
}