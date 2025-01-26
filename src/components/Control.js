import React, { useContext } from 'react';
import { Context } from '../context/Context';

const Control = () => {
  const { increment, decrement } = useContext(Context);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Control;
