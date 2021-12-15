# Coleções Chaveadas

Este repositório contém a atividade prática do Curso "Coleções Chaveadas", que faz parte do Basecamp de Javascript que foi ministrado pela [Stephany Nusch](https://github.com/stebsnusch).

## Atividade 1: Maps

Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

1. Crie uma função `getAdmins` que recebe um `Map`;
2. Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
3. Dentro de `getAdmins`, utilize o loop `for...of` para retornar uma lista com os nomes dos usuários que são administradores.

**Resposta:**

```js
let users = new Map()
users.set("Luiz", "Admin")
users.set("Eduardo", "User")

function getAdmins(a) {
    let admins = new Map()
    for (let [user, role] of a) {
        if (role == "Admin") {
            admins.set(user, role)
        }
    }
    return admins
}

getAdmins(users)
```

Ou melhor:

```js
let getAdmins = (users) => new Map([...users].filter(([user, role]) => role == "Admin"))
```

```Text
==> Map(1) {'Luiz' => 'Admin'}
```

## Atividade 2: Sets

Dado o array `[30, 30, 40, 5, 223, 2049, 3034, 5]`, retorne outro array apenas com valores únicos.

```js
let nonRepeated = (arr) => [...(new Set(arr)]]

nonRepeated([30, 30, 40, 5, 223, 2049, 3034, 5])
```

```Text
==> (6) [30, 40, 5, 223, 2049, 3034]
```
