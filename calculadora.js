const entrada = require('prompt-sync')({ sigint: false});

let continuar = true;

while (continuar) {
    let operador = entrada("Digite a operação (+,-,*,/) ou sair para encerrar: ");
    if (operador.toLocaleLowerCase() === "sair" || operador.toLocaleLowerCase() === "encerrar") {
        console.log("Encerrando a calculadora...");
        continuar = false;
    }
    else if(!(["+", "-", "*", "/"].includes(operador))){
        console.log("Essa operação não é valida")
    }
    else {
        let num1 = Number(entrada("Digite o primeiro numero: "));
        let num2 = Number(entrada("Digite o segundo numero: "));
        let resultado;

        switch (operador) {
            case "+":
               resultado = num1 + num2;
               break;
            case "-":
                resultado = num1 - num2;
                break;
            case "*":
                resultado = num1 * num2;
                break
            case "/":
                if (num2 === 0) {
                    console.log("Não é possível dividir por zero!");
                    continue;
                }
                break;
            
        } console.log("O Resultado de:" + num1 + operador + num2 + " = " + resultado);
      }
    }


