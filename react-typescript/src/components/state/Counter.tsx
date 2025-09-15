import { useReducer } from "react";

const counterReducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case "Incriment":
      return state + 1;
    case "Decriment":
      return state - 1;
    case "Rest":
      return 0;
    default:
      return state;
  }
};

const Counter = () => {
  const [counter, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      Counter project with use Reducer
      <h1>Counter:{counter}</h1>
      <button onClick={() => dispatch({ type: "Incriment" })}>Incriment</button>
      <button onClick={() => dispatch({ type: "Rest" })}>Rest</button>
      <button onClick={() => dispatch({ type: "Decriment" })}>Decriment</button>
    </div>
  );
};

export default Counter;
