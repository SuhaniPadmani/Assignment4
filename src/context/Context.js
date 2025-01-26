import React, { createContext, useState } from 'react';

export const Context = createContext();

export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <Context.Provider value={{ counter, increment, decrement }}>
      {children}
    </Context.Provider>
  );
};
