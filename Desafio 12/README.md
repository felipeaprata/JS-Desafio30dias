Problema:

Escreva uma função que receba um valor inteiro e retorne 
a quantidade de cada moeda para se chegar ao valor.
Deve-se sempre priorizar as moedas de maior valor 
(o máximo possível de moedas de 500, depois o máximo 
possível de moedas de 100, 25, 10, 5 e 1).

Solução:

Feito uma função que recebe um numero, criando um objeto com as moedas. Depois uma variável(result) que recebe o numero e divide ele por 500 para descobrir quantas vezes irá precisar da moeda 500 sobre aquele valor, e com o Math.floor para pegar só o inteiro. Em seguida, result recebe o valor dividido * 500 - result, para pegar o que restou. Todos esse processo continua até a moeda 1.