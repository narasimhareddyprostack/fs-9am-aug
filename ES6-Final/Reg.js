let user = {
  name: "Ravi",
  email: "ravi@gmail.com",
  password: "123456",
};
let newPassword = "sadkfaklfjflvcnvzcxl;vjl;ajdkf";
let new_User = { ...user, password: newPassword };
console.log(new_User);
