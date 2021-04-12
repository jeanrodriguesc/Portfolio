var peso = document.getElementById('peso').value;
var altura = document.getElementById('altura').value;
resultado = document.getElementById('resultado').innerHTML;

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