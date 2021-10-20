import React, { useState } from "react";
let Message = () => {
  let [msg, setMsg] = useState("Hello");
  //let msg="Hello"
  let updateMessageHandler = () => {
    setMsg("GM");
  };
  return (
    <>
      <div className="container mt-6">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Wish Message:{msg}</div>
              <div className="card-body">
                <button onClick={updateMessageHandler}>Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Message;
