class ContaBancaria {
    constructor(agencia, conta, saldo) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
        this.tipo = "";
        this.saldo = 0;
    }

    get saldo () {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        }
        else {
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
        }
        else if (valor < 500) {
            this.saldo -= valor;
        }
    }
}
