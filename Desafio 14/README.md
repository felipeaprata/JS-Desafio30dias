Problema:

Escreva uma classe que contenha um método para gerar 
uma licença de voo e os seguintes atributos:
• Nome
• Sobrenome
• Data de Nascimento
• Licença de Voo (que deve iniciar sempre como falso)
Além disso a classe deve possuir um método para criar uma 
licença caso a pessoa ainda não possua uma. A licença 
deve ser uma string seguindo o seguinte padrão:
Os primeiros cinco caracteres do sobrenome em letras 
maiúsculas (completado com 9's caso possua menos de 
cinco)
• O 6o caractere é um traço (-)
O 7o caractere é o algarismo da década (penúltimo) do 
ano de nascimento
• O 8o e 9o caracteres são o mês de nascimento
0 10° caractere é o algarismo do ano (último) do ano 
de nascimento
•011° caractere é um ponto (.)
0 12° caractere é a primeira letra do primeiro nome 
(minúscula)

Solução:

Nessa tive um pouco de dificuldade. Nem tanto em entender o problema e como resolver, mas como utilizar a ferramenta de Classes. Não tinha conhecimento sobre. 

Foi criado uma Classe Pilot, aonde recebe o nome, sobrenome e data de nascimento, e nela contem uma função que cria a licença de voo conforme pedido no enunciado.