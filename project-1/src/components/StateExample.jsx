import React, { useState } from "react";

const StateExample = () => {
  // let count = 10 ;

  const [count, setCount] = useState(10);
  const [isAuth,setIsAuth] = useState(true);

  const increaseCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
      console.log(count);
    }
  };

  return (
    <div>
      <h2>{count}</h2>
      {
        isAuth && <>
            <button onClick={decreaseCount}>Decrease</button>  <button onClick={increaseCount}>Increase</button> 
        </>
      }
      
    </div>
  );
};

export default StateExample;
