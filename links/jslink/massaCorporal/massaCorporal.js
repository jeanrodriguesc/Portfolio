

var btnAltura = document.getElementById('btnAltura');


function imc(){
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var resultado = document.getElementById('resultado').value;

    if(peso !== '' && altura !== ''){
        alert ('Valor')
    } else {}
}

btnAltura.addEventListener('click', imc);



function calcular() {
    var res = peso/altura
    console.log(res)
    
    document.getElementById("resultado").innerHTML = `${res}`
}









//função para escrever so numeros no input

function somenteNumeros(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;
    // charCode 8 = backspace   
    // charCode 9 = tab
    if (charCode != 8 && charCode != 9) {
        // charCode 48 equivale a 0   
        // charCode 57 equivale a 9
        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }
}