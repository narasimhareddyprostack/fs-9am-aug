import React, { useState } from "react";

let Cart = () => {
  let [product, setProduct] = useState({
    product_Name: "Apple Iphone 11",
    price: 49900,
    qty: 2,
    image:
      "https://rukminim1.flixcart.com/image/224/224/kgiaykw0/mobile/r/f/s/apple-iphone-11-mhde3hn-a-original-imafwqepzbrcagw3.jpeg?q=90",
  });
  let decrHandler = () => {
    setProduct({ ...product, qty: product.qty - 1 });
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <table className="table table-hover table-dark bg-dark">
              <thead>
                <th>Product Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>QTY</th>
                <th>Total Amount</th>
              </thead>
              <tbody>
                <tr>
                  <td>{product.product_Name}</td>
                  <td>
                    <img src={product.image} width="60%" height="60%" />
                  </td>
                  <td>{product.price}</td>
                  <td>
                    <i class="fas fa-minus-circle" onClick={decrHandler}></i>
                    {product.qty}
                    <i
                      class="fas fa-plus-circle"
                      onClick={() => {
                        setProduct({ ...product, qty: product.qty + 1 });
                      }}
                    ></i>
                  </td>
                  <td>{product.price * product.qty}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
