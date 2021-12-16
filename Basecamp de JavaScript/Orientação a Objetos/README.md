# Orientação a Objetos

Este repositório contém a atividade prática do Curso "Orientação a Objetos", que faz parte do Basecamp de Javascript que foi ministrado pela [Stephany Nusch](https://github.com/stebsnusch).

## Atividade: Conta Bancária

Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

1. Crie a classe `ContaBancaria`, que possui os parâmetros `agencia`, `numero`, `tipo` e `saldo`;
2. Dentro de `ContaBancaria`, construa o getter e o setter de `saldo`;
3. Dentro de `ContaBancaria`, crie os métodos `sacar` e `depositar`;
4. Crie uma classe-filha chamada `ContaCorrente` que herda todos esses parâmetros e ainda possua o parâmetro `cartaoCredito`;
5. Ainda em `ContaCorrente`, construa o getter e o setter de `cartaoCredito`;
6. Ainda em `ContaCorrente`, faça com que o `tipo` seja 'conta corrente' por padrão;
7. Crie uma classe-filha chamada `ContaPoupanca` que herda todos os parâmetros de `ContaBancaria`;
8. Crie uma classe-filha chamada `ContaUniversitaria` que herda todos os parâmetros de `ContaBancaria`;
9. Faça com que o método `saque` de `ContaUniversitaria` apenas seja capaz de sacar valores **menores que 500 reais**.

**Solução:**

```js
class ContaBancaria {
  constructor(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
    this.tipo = "";
    this.saldo = 0;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }

  sacar(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente");
    } else {
      this.saldo -= valor;
    }
  }

  depositar(valor) {
    this.saldo += valor;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, conta, saldo, cartaoCredito) {
    super(agencia, conta, saldo);
    this.cartaoCredito = cartaoCredito;
    this.tipo = "Conta Corrente";
    this.cartaoCredito = "";
  }
  get cartaoCredito() {}
  set cartaoCredito(numero) {
    this._cartaoCredito = numero;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, conta, saldo) {
    super(agencia, conta, saldo);
    this.tipo = "Conta Poupança";
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, conta, saldo) {
    super(agencia, conta, saldo);
    this.tipo = "Conta Universitária";
  }
  sacar(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente");
    } else if (valor < 500) {
      this.saldo -= valor;
    }
  }
}
```
