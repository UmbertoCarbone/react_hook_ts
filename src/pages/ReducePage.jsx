import UseReducer01 from "../components/reducer/UseReducer01";
import UseReducer02 from "../components/reducer/UseReducer02";
import UseReducer03 from "../components/reducer/UseReducer03";
import UseReducer04 from "../components/reducer/UseReducer04";
import UseReducer05 from "../components/reducer/UseReducer05";

export default function ReducePage() {
  return (
    <>
      <h1 className="esercizio" style={{ textAlign: "center" }}>
        Esercizi con useReducer
      </h1>
      <UseReducer01 />
      <UseReducer02 />
      <UseReducer03 />
      <UseReducer04 />
      <UseReducer05 />
    </>
  );
}
