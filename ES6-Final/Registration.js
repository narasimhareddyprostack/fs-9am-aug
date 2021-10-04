let user = { name: "ravi", email: "ravi@tcs.com", password: "123456" };
let details = { email: "ravi@gmail.com", skills: "JS,React JS, Java, SB" };

let userDetails = { ...user, ...details };
console.log(userDetails);
