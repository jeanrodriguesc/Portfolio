const btn = document.getElementById('btn');


function imc(){
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if(peso !== '' && altura !== ''){
        

        const valorIMC = (peso / (altura * altura));



        let classificacao = '';

        if(valorIMC < 18.5){
        classificacao = 'abaixo do peso';
       }else if (valorIMC < 25) {
        classificacao = 'Você está com o peso ideal. Parabens!' ;
       }else if (valorIMC < 30) {
        classificacao = 'Levemente acima do peso';
       }else if (valorIMC < 35) {
        classificacao = 'Você está com Obesidade grau I';
       }else if (valorIMC < 40) {
        classificacao = 'Você está com Obesidade grau II';
       }else if (valorIMC < 45) {
        classificacao = 'Você está com Obesidade grau III. Cuidado!';
       }

        resultado.innerHTML = `Seu UMC é ${valorIMC} e você está ${classificacao}`;

    }else { 
        resultado.innerHTML = 'Preencha todos os campos'
    }
}

btn.addEventListener('click', imc);








//função para escrever so numeros no input

          //  function somenteNumeros(e) {
           //     var charCode = e.charCode ? e.charCode : e.keyCode;
                // charCode 8 = backspace   
                // charCode 9 = tab
            //    if (charCode != 8 && charCode != 9) {
                    // charCode 48 equivale a 0   
                    // charCode 57 equivale a 9
         //         if (charCode < 48 || charCode > 57) {
           //          return false;
          //          }
          //      }
         //      }