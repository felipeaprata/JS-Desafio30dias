Problema:

Escreva uma função que recebe um número e retorna o seu 
fatorial sem utilizar nenhuma estrutura de repetição (while, 
dowhile, for, etc).
0 fatorial de um númeroé igual a multiplicação de todos os 
inteiros positivos menores ou iguais a ele. Ela deve ser 
capaz de retornar números inteiros corretos mesmo para 
valores altos.


Solução:

Usando alguma estrutura de repetição(while, for,...) ficaria mais fácil, mas a ideia do problema era usar recursividade. Criado uma função que recebe o numero para fatorar, primeiro criado uma variavel que recebe esse numero e em seguida um 'if' se o numero for 0 retorna 1, senão retorna o numero * a função enviando o numero -1, assim até chegar ao 'if' e retornar o numero total.