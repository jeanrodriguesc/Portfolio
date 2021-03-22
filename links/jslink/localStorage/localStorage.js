// para nao dar erro, temos que fazer o if, pois se tiver sendo a primeira vez que a pessoa EventTarget, nao vai ter valor algum
// por isso temos que fazer o if, se tiver dado, faça isso..

if(localStorage.estado){
    document.getElementById('estado').value = localStorage.estado;
}

if(localStorage.estado){
    document.getElementById('dataInicio').value = localStorage.dataInicio;
}

if(localStorage.estado){
    document.getElementById('dataFinal').value = localStorage.dataFinal;
}


// função para salvar a data no localStorage
var salvarData = function(){
    var estado = document.getElementById('estado').value;
    var dataInicio = document.getElementById('dataInicio').value;
    var dataFinal = document.getElementById('dataFinal').value;

    localStorage.setItem('estado', estado);
    localStorage.setItem('dataInicio', dataInicio);
    localStorage.setItem('dataFinal', dataFinal);
}


// qualquer alteração que o documento html receba
document.onchange = salvarData