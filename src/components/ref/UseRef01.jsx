import { useRef} from "react";

export default function UseRef01() {
  const usernameRef = useRef();

  const focusInput = () => {
    usernameRef.current.focus();
  };

  const clearInput = () => {
    usernameRef.current.value = "";
  };

const console_log_username = () => {
console.log(usernameRef.current.value)
usernameRef.current.value = "";
}
  return (
    
    <div className="esercizio">
      <h2>ES 01 - UseRef</h2>
      <input type="text" placeholder="Username" ref={usernameRef} />
      <button onClick={focusInput}>Dai il focus</button>
      <button onClick={clearInput}>Svuota il campo</button>
      <button onClick={console_log_username}>Stampa in Console</button>
    </div>
  );
}
