import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <h1>Hook React:</h1>
      <h3>UseReducer:</h3>
      <Link to="/useReducer">
        <button>Vai a useReducer</button>
      </Link>
    </>
  );
}
