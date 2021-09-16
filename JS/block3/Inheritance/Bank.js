class Account {
  open_Account() {
    console.log("Account Opened Successfully");
  }
  close_Account() {
    console.log("Closing Account Successfully");
  }
}
class Saving_Accouont extends Account {
  savings() {
    console.log("Saving Account");
  }
}
let s1 = new Saving_Accouont();
s1.open_Account();
s1.savings();

s1.close_Account();

class Salary_Account extends Account {
  salary() {
    console.log("Salary Accunt");
  }
}
console.log("................");
let salary_acc = new Salary_Account();
salary_acc.open_Account();
salary_acc.salary();
salary_acc.close_Account();

/* class Current_Account extends Account {}
 */
