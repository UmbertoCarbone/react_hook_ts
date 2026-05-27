import { useReducer } from "react";

export default function UseReducer01() {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENTA":
        return { count: state.count + 1 };
      case "DECREMENTA":
        return { count: state.count - 1 };
      case "ZERO":
        return { count: 0 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementa = () => {
    dispatch({ type: "INCREMENTA" });
  };

  const decrementa = () => {
    dispatch({ type: "DECREMENTA" });
  };

  const azzera = () => {
    dispatch({ type: "ZERO" });
  };

  return (
    <div className="esercizio">
      <h2>ES 01 - Contatore</h2>
      <p>Contatore: {state.count}</p>
      <button onClick={decrementa}>-</button>
      <button onClick={incrementa}>+</button>
      <button onClick={azzera}>0</button>
    </div>
  );
}
