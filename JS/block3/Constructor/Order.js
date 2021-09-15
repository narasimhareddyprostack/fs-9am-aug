class Order {
  mobile_Name;
  color;
  price;
  constructor(a, b, c) {
    this.mobile_Name = a;
    this.color = b;
    this.price = c;
  }
  cancel_Order() {
    console.log("Order Canceled Successfully");
    return "";
  }
}
let order1 = new Order("Iphone 5s", "Red", 45000);
console.log(order1);
console.log(order1.mobile_Name);
order1.cancel_Order();
