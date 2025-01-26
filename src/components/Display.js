import React, { useContext } from 'react';
import { Context } from '../context/Context';

const Display = () => {
  const { counter } = useContext(Context);

  return <h1>Counter: {counter}</h1>;
};

export default Display;
