import React from "react";
import { gmAction, gnAction } from "../../redux/Message/message.action";
import { useDispatch, useSelector } from "react-redux";
let Message = () => {
  let dispatch = useDispatch();
  let message = useSelector((state) => {
    return state.message;
  });

  let gmHanlder = () => {
    //dispatch an action
    dispatch(gmAction());
  };
  let gnHandler = () => {
    //dispatch an action
    dispatch(gnAction());
  };
  return (
    <div>
      <h1>Message : {message.message}</h1>
      <button onClick={gmHanlder}>GM</button>
      <button onClick={gnHandler}>GN</button>
    </div>
  );
};

export default Message;
