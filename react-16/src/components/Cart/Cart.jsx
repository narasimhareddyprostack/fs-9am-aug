import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import Actions
import { incrAction, decrAction } from "../../redux/Cart/cart.action";
let Cart = () => {
  let dispatch = useDispatch();
  let product = useSelector((state) => {
    return state.cart;
  });
  let decrHandler = () => {
    //dispatch - an action
    dispatch(decrAction());
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <pre>{JSON.stringify(product)}</pre>
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
                        dispatch(incrAction());
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
