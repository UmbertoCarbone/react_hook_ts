import { useRef, useState } from "react";

export default function UseRef01() {
  const inputRef = useRef(null);
  const contatoreRef = useRef(0); // non causa re-render
  const [messaggio, setMessaggio] = useState("");

  const mettiAFuoco = () => {
    inputRef.current.focus();
  };

  const svuota = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const aggiungiClick = () => {
    contatoreRef.current += 1;
    setMessaggio(`Hai cliccato ${contatoreRef.current} volte (senza re-render extra)`);
  };

  return (
    <div className="esercizio">
      <h2>ES 01 - Riferimento DOM con useRef</h2>
      <input ref={inputRef} type="text" placeholder="Scrivi qualcosa..." />
      <button onClick={mettiAFuoco}>Metti a fuoco</button>
      <button onClick={svuota}>Svuota</button>
      <hr />
      <p>{messaggio || "Clicca il bottone sotto"}</p>
      <button onClick={aggiungiClick}>Conta click (ref, non state)</button>
    </div>
  );
}
