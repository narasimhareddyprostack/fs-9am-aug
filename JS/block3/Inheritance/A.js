class P {
  m1() {
    console.log("Parent Class - M1() method");
  }
}
class C extends P {
  m1() {
    console.log("Child Class - M1() method");
  }
}

let c = new C();
c.m1();
