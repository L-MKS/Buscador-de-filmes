
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');
let contador = 0;

function reset(){
    soma.value = "";
}

function somarAoSaldo(soma: number) {
    if(campoSaldo){
        contador += soma
        campoSaldo.innerHTML = contador.toString();
        reset();
    }
}

function limparSaldo() {
    if(campoSaldo) {
        contador = 0;
        campoSaldo.innerHTML = contador.toString();
    }
}

if(botaoAtualizar){
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}    

if(botaoLimpar){
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */