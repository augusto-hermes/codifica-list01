// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')();

const A = parseFloat(prompt('Digite valor do lado A: '));
const B = parseFloat(prompt('Digite valor do lado B: '));
const C = parseFloat(prompt('Digite valor do lado C: '));

// Verifica se forma um triângulo
if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
        console.log('Triângulo Equilátero');
    } else if (A === B || A === C || B === C) {
        console.log('Triângulo Isósceles');
    } else {
        console.log('Triângulo Escaleno');
    }
} else {
    console.log('Valores fornecidos não formam um triângulo, verifique!');
}