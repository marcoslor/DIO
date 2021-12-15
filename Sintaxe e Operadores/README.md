# Sintaxe e Operadores

Este repositório contém a atividade prática do Curso "Sintaxe e Operadores", que faz parte do Basecamp de Javascript que foi ministrado pela [Stephany Nusch](https://github.com/stebsnusch).

## Atividade

- Crie uma função que recebe dois números como parâmetros.
- Confira se os números são iguais.
- Confira se a soma dos números é maior que 10 ou menor que 20.
- Retorne uma string dizendo "Os números `num1` e `num2` não/são iguais. Sua soma é `soma`, que é `maior/menor` que 10 e `maior/menor` que 20".

Exemplo:

```Text
Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
```

### Solução

[CodePen](https://codepen.io/marcoslor/full/NWadJNO)

```JavaScript
function compare(a, b) {
    return `Os números ${a} e ${b}${a==b ? "" : " não"} são iguais. Sua soma é ${a+b}, que é ${a + b > 10 ? "maior" : "menor"} que 10 e ${a + b > 20 ? "maior" : "menor"} que 20.`
}
```
