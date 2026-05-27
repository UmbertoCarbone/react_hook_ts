import UseReducer01 from "../components/reducer/UseReducer01";
import UseReducer02 from "../components/reducer/UseReducer02";

export default function ReducePage() {
  return (
    <>
      <h1 className="esercizio" style={{ textAlign: "center" }}>
        Esercizi con useReducer
      </h1>
      <UseReducer01 />
      <UseReducer02 />
    </>
  );
}
