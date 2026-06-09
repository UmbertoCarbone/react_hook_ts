import { Link } from "react-router-dom";
export default function Homepage() {
  return (
    <div className="container">
      <main className="center-content">
        <h1>Hook React:</h1>
        
        <section className="link-group">
          <h3>useReducer</h3>
          <Link to="/useReducer"><button className="button-style">Vai a useReducer</button></Link>
        </section>

        <section className="link-group">
          <h3>useMemo</h3>
          <Link to="/useMemo"><button className="button-style">Vai a useMemo</button></Link>
        </section>

        <section className="link-group">
          <h3>useCallback</h3>
          <Link to="/useCallback"><button className="button-style">Vai a useCallback</button></Link>
        </section>

        <section className="link-group">
          <h3>useRef</h3>
          <Link to="/useRef"><button className="button-style">Vai a useRef</button></Link>
        </section>

        <section className="link-group">
          <h3>Custom Hook</h3>
          <Link to="/customHook"><button className="button-style">Vai a Custom Hook</button></Link>
        </section>

        <section className="link-group">
          <h3>Browser Storage</h3>
          <Link to="/storage"><button className="button-style">Vai a Browser Storage</button></Link>
        </section>

        <section className="link-group">
          <h3>React.memo</h3>
          <Link to="/React_memo"><button className="button-style">Vai a React.memo</button></Link>
        </section>
      </main>
    </div>
  );
}