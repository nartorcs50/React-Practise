import "./Counter.css";
import React, { useState } from "react";
function Counter() {
  // const [counter, setCounter] = useState(0)
  // function incrementCounter () {
  //     setCounter((prevCounter) => prevCounter + 1)
  //     //the code above displays, how using the 'callback' method to increment, it also allows
  //     //to store the previous value. thus, you can duplicate the callback and get it to increment x2.
  //     // this method "setCounter(counter + 1)" is not best practise, its usable but no ideal.
  // }
  // function decrementCounter () {
  //     // setCounter(counter - 1)
  //     setCounter((prevCounter) => prevCounter - 1)
  // }

  const [cart, setCart] = useState({
    item: " : Apples",
    quantity: 0,
  });
  function addApples () {
    setCart(prevCart => ({         
        ...prevCart,
        quantity: prevCart.quantity + 1,
    }))    
  }
  function subApples () {
    setCart(prevCart => ({         
        ...prevCart,  //the ' ... ' is used to spread out the items in the object /
        quantity: prevCart.quantity - 1,
    }))    
  }
  return (
    <div className="buttons__wrapper">
      <button onClick={subApples}> - </button>
      {cart.quantity}
      {cart.item}
      <button onClick={addApples}> + </button>
    </div>
  );
}

export default Counter;
