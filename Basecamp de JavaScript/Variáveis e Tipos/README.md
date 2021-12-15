# Variáveis e Tipos

Neste repositório você encontrará a atividade prática proposta pelo curso "Variáveis e Tipos" do Basecamp de Javascript que foi ministrado pela [Stephany Nusch](https://github.com/stebsnusch).

## Atividade 1

Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: _frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)_

Exemplo:

```Text
Input -> "meta"
Output -> false
```

```Text
Input -> "reviver"
Output -> true
```

**Solução**:

```JavaScript
function checkPalindrome(s) {
  let acc = true
  for (let i = 0; i < s.length / 2; i++) {
      acc = acc && s[i] == s[s.length - i - 1]
  }
  return acc
}
```

## Atividade 2

Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo:

```Text
Input -> [1, 3, 4, 6, 80, 33, 23, 90]
Output -> [1, 3, 0, 0, 0, 33, 23, 0]
```

```Text
Input -> []
Output -> -1
```

**Solução**:

```JavaScript
let troca = (a) => a.map((e) => e % 2 == 0 ? 0 : e)
```
