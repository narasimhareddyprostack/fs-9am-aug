class Bank_Cust {
  min_Bal = 500;

  open_Account() {
    console.log("Rama Opened Account Successfully");
    return "";
  }
  close_Account() {
    console.log("Closed Successfully");
  }
}
let c1 = new Bank_Cust();
let c2 = new Bank_Cust();

c1.open_Account();
c1.close_Account();
c2.open_Account();
