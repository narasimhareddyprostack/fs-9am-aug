class Bank_Cust {
  min_Bal = 500;
  constructor(a, b, c, d) {
    this.acc_No = a;
    this.acc_Name = b;
    this.email = c;
    this.amount = d;
  }
  open_Account() {
    console.log(this.acc_Name + " ..." + "Account Opened Successfully");
  }
  get_Balance() {
    console.log(this.acc_Name, "... Balance is", this.amount - this.min_Bal);
  }
}
let c1 = new Bank_Cust(101, "Rama", "rama@tcs.com", 2000);
c1.open_Account();
c1.get_Balance();
let c2 = new Bank_Cust(102, "Veera", "veera@info.com", 3000);
c2.open_Account();
c2.get_Balance();
