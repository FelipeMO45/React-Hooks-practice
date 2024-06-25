import React, { useReducer } from 'react';
import '../App.css';

interface State {
  count: number;
}

type Action = { type: 'increment' } | { type: 'decrement' };

const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="counter-container">
      <h1>Contador: {state.count}</h1>
      <div className="button-container"> 
        <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
      </div>
    </div>
  );
};

export default Counter;
