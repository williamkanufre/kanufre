/*
var radio = document.querySelector('.manual-btn')
var cont = 0

document.getElementById('radio0').checked = true

setInterval(() => {
    proximaImg()
}, 3000)

function proximaImg(){
    cont++

    if(cont > 5){
        cont = 0 
    }

    document.getElementById('radio'+cont).checked = true
}*/
var radios = document.querySelectorAll('.manual-btn');
var cont = 0;

document.getElementById('radio0').checked = true;

setInterval(() => {
    proximaImg();
}, 3000);

function proximaImg() {
    cont++;

    if (cont > 4) { // Ajustado para 5 slides (índices de 0 a 4)
        cont = 0;
    }

    document.getElementById('radio' + cont).checked = true;
}
