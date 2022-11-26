function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERROR] Dados incorretos')
    } else {
        var fsex =document.getElementsByName('redsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'imagens/garotoCriança.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/garotoAdolecente.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homemAdulto.jpg' )
            } else {
                //idoso
                img.setAttribute('src', 'imagens/veio.jpg' )
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'imagens/garotaCriança.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/garotaAdolecente.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulherAdulto.jpg' )
            } else {
                //idoso
                img.setAttribute('src', 'imagens/veia.jpg' )
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = 'É '+genero+' com '+idade+' anos'
        res.appendChild(img)
    }
}