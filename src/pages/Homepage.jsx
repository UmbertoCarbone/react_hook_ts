import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <h1>Hook React:</h1>
      <h3>useReducer:</h3>
      <Link to="/useReducer"><button>Vai a useReducer</button></Link>
      <h3>useMemo:</h3>
      <Link to="/useMemo"><button>Vai a useMemo</button></Link>
      <h3>useCallback:</h3>
      <Link to="/useCallback"><button>Vai a useCallback</button></Link>
      <h3>useRef:</h3>
      <Link to="/useRef"><button>Vai a useRef</button></Link>
      <h3>Custom Hook:</h3>
      <Link to="/customHook"><button>Vai a Custom Hook</button></Link>
      <h3>Browser Storage:</h3>
      <Link to="/storage"><button>Vai a Browser Storage</button></Link>
    </>
  );
}
