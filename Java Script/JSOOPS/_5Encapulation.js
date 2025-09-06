class BankAcc{
    #balance=5000;

    constructor(amount){
        this.amount=amount;
    }

    get Balance(){
        return this.#balance;
    }
    
    deposit(){
        this.#balance+=this.amount;
        return `total amount : $${this.#balance}`;
    }
}

let checkbalance=new BankAcc(100000);
console.log(checkbalance.deposit());
