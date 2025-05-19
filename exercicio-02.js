// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso)
// utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync')();

const idade = parseInt(prompt('Digite a idade da pessoa: '));

if (idade < 12) {
    console.log('Categoria: Criança');
} else if (idade < 18) {
    console.log('Categoria: Adolescente');
} else if (idade < 60) {
    console.log('Categoria: Adulto');
} else {
    console.log('Categoria: Idoso');
}