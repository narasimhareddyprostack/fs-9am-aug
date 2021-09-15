class Bank_Cust {
  min_Bal = 500;
  constructor(a, b, c, d) {
    this.acc_No = a;
    this.acc_Name = b;
    this.email = c;
    this.amount = d;
    console.log("constructor executed automatically");
  }
  open_Account() {
    console.log("Account Opened Successfully");
  }
}
let c1 = new Bank_Cust(101, "Rama", "rama@tcs.com", 2000);
console.log(c1);

let c2 = new Bank_Cust(102, "Veera", "veera@info.com", 3000);
console.log(c2);
