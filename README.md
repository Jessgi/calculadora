# Calculadora Simples em JavaScript

Este projeto foi desenvolvido como exercício da Aula 8 do curso Bolsa Futuro Digital, com o objetivo de praticar:
- Entrada de dados no terminal (`prompt-sync`)
- Estruturas de repetição (`while`)
- Estruturas condicionais (`if`, `else if`, `switch`)
- Operadores aritméticos (`+`, `-`, `*`, `/`)

## Funcionalidades
- Solicita ao usuário a operação desejada: soma, subtração, multiplicação ou divisão
- Pede dois números e exibe o resultado da operação
- Impede divisão por zero
- Repete as operações até o usuário digitar "sair" ou "encerrar"

## Como executar
1. Certifique-se de ter o Node.js instalado.
2. Instale a dependência `prompt-sync`:
   
   npm install prompt-sync
Execute o programa:

node calculadora.js

Exemplo de uso

Digite a operação (+,-,*,/) ou sair para encerrar: +
Digite o primeiro numero: 5
Digite o segundo numero: 3
O Resultado de: 5+3 = 8


Aprendizados

Como capturar entrada de dados no terminal com prompt-sync

Estruturar um programa que roda em loop até o usuário decidir parar

Usar switch para tratar diferentes operações matemáticas

Tratar erros simples (como divisão por zero ou operação inválida)

