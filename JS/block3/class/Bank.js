class Bank {
  min_Bal = 500;
  open_Account() {
    console.log("Account Opened Successfully");
  }
}

let r = new Bank();
console.log(r.min_Bal);
r.open_Account();

let p = new Bank();
console.log(p.min_Bal);
p.open_Account();
