# Tratamento de Erros

Este repositório contém a atividade prática do Curso "Debugging e Error Handling", que faz parte do Basecamp de Javascript que foi ministrado pela [Stephany Nusch](https://github.com/stebsnusch).

## Atividade: validação de erros por tipo

O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

- Crie uma função que recebe um array e um número
- Realize as seguintes validações
  - Se os parâmetros não forem enviados, lance um erro do tipo `ReferenceError`
  - Se o array não for do tipo 'object', lance um erro do tipo `TypeError`
  - Se o número não for do tipo 'number', lance um erro do tipo `TypeError`
  - Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo `RangeError`
- Utilize a declaração `try...catch`
- Filtre as chamadas de catch por cada tipo de erro utilizando o operador `instanceof`

**Solução:**

```js
function handling(arr, n) {
    if (!(arr == 0 || arr) || !(n == 0 || n)) {
        throw ReferenceError("Parâmetros inválidos")
    }
    if (typeof arr !== 'object') {
        throw new TypeError(arr + " Não é um objeto")
    }
    if (typeof n !== 'number') {
        throw new TypeError(n + " Não é um número")
    }
    if (arr.length != n) {
        throw new RangeError("Número não corresponde ao tamanho da array")
    }
}

function catching (e) {
    if (e instanceof ReferenceError) {
        return "Erro de referência: " + e.message
    }
    if (e instanceof TypeError) {
        return "Erro de tipo: " + e.message
    }
    if (e instanceof RangeError) {
        return "Erro de intervalo: " + e.message
    }
}
```

O output para cada caso:

```js
try {
    handling(params)
} catch (e) {
    console.log(catching(e))
}
```

`()`

```text
==> Erro de referência: Parâmetros inválidos
```

`(0, 0)`

```text
==> Erro de tipo: 0 Não é um objeto
```
`([],[])`

```text
==> Erro de tipo:  Não é um número
```

`([], 1)`

```text
==> Erro de intervalo: Número não corresponde ao tamanho da array
```

## Links Auxiliares

- [Objeto Error](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [instanceof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof)
- [typeof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof)
- [try...catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)