# Funções

Este repositório contém a atividade prática do Curso "Funções", que faz parte do Basecamp de Javascript que foi ministrado pela [Stephany Nusch](https://github.com/stebsnusch).

## Atividade 1: Alunos Aprovados

1. Crie uma função que recebe o array `alunos` e um número que irá representar a média final;
2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

**Solução:**

```js
function aprovados(alunos, media) {
    return alunos.filter((aluno)=>{
        let {nota} = aluno
        if (nota >= media) {
            return true
        } 
    })
}
```

Ou usando as arrow functions:

```js
let aprovados = (alunos, media) => alunos.filter(({nota}) => nota >= media)
```

## Atividade 2: This

Dada a função `calculaIdade`, utilize os métodos call e apply para modificar o valor de `this`. Crie seus próprios objetos para esta atividade!

```js
function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}
```

**Solução:**

```js
let pessoa = {
    idade: 20,
    nome: "João"
}

calculaIdade.apply(pessoa, [20])
calculaIdade.call(pessoa, 20)
```

Output:

```text
==> 'Daqui a 20 anos, João terá 40 anos de idade.'
```
