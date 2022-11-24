function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'Agora são '+hora+' horas'
    if (hora >= 0 && hora <12) {
        //bomdia
        img.src = 'imagens/MANHÃ,café,bolacha,chocolate.jpg'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagens/TARDE,gatito,sol.jpg'
    } else {
        //boa noite
        img.src ='imagens/NOITE.jpg'
    }
}
//rgb(214, 148, 75) cor tarde
//rgb(137, 66, 41) cor manhã
//rgb(17, 73, 78) cor noite