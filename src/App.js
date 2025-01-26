import React from 'react';
import { CounterProvider } from './context/Context';
import Display from './components/Display';
import Control from './components/Control';

const App = () => {
  return (
    <CounterProvider>
      <div>
        <Display />
        <Control />
      </div>
    </CounterProvider>
  );
};

export default App;
