import { useReducer } from "react";

export default function UseReducer02() {
  const initialState = { colore: "red" };

  const cambiaColore = (colore) => {
    if (colore === "red") return "yellow";
    if (colore === "yellow") return "green";
    if (colore === "green") return "red";
  };

  function reducer(state, action) {
    switch (action.type) {
      case "AVANTI":
        return { colore: cambiaColore(state.colore) };
      case "RESET":
        return { colore: "red" };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="esercizio">
      <h2>ES 02 - Cambio Colore</h2>
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: state.colore,
          borderRadius: "50%",
          marginBottom: "12px",
        }}
      ></div>
      <button onClick={() => dispatch({ type: "AVANTI" })}>Avanti</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
