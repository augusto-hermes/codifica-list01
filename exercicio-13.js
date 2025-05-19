// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')();

let soma = 0;
let count = 0;
let numero;

do {
    numero = parseFloat(prompt('Digite um número decimal (0 para sair): '));
    if (numero !== 0) {
        soma += numero;
        count++;
    }
} while (numero !== 0);

if (count > 0) {
    const media = soma / count;
    console.log(`A média aritmética dos números digitados é: ${media}`);
} else {
    console.log('Nenhum número foi digitado.');
}