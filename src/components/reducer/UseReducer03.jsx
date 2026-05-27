import { useReducer, useState } from "react";

// Dati iniziali
const utentiIniziali = [
  { id: 1, nome: "Mario", eta: 25, citta: "Roma" },
  { id: 2, nome: "Luca", eta: 32, citta: "Milano" },
  { id: 3, nome: "Anna", eta: 28, citta: "Roma" },
  { id: 4, nome: "Sara", eta: 22, citta: "Napoli" },
  { id: 5, nome: "Giulia", eta: 35, citta: "Milano" },
  { id: 6, nome: "Paolo", eta: 27, citta: "Torino" },
  { id: 7, nome: "Elena", eta: 30, citta: "Firenze" },
  { id: 8, nome: "Marco", eta: 24, citta: "Roma" },
  { id: 9, nome: "Chiara", eta: 29, citta: "Bologna" },
  { id: 10, nome: "Davide", eta: 31, citta: "Napoli" },
  { id: 11, nome: "Francesca", eta: 26, citta: "Milano" },
];

const initialState = {
  utenti: utentiIniziali,
};

// TODO: scrivi la funzione reducer
function reducer(state, action) {
  switch (action.type) {
    case "FILTRA_CITTA":
      return {
        ...state,
        utenti: utentiIniziali.filter(
          (u) =>
            action.payload === "" ||
            u.citta.toLowerCase().startsWith(action.payload.toLowerCase()),
        ),
      };
    case "FILTRA_ETA":
      return {
        ...state,
        utenti: utentiIniziali.filter(
          (u) => action.payload === "" || u.eta >= Number(action.payload),
        ),
      };
    case "FILTRA_TUTTO":
      return {
        ...state,
        utenti: utentiIniziali.filter(
          (u) =>
            action.payload.citta &&
            action.payload.eta &&
            u.citta.toLowerCase().startsWith(action.payload.citta.toLowerCase()) &&
            u.eta >= Number(action.payload.eta),
        ),
      };
    case "RESET":
      return { ...state, utenti: utentiIniziali };
    default:
      return state;
  }
}

export default function UseReducer03() {
  // TODO: collega useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputCitta, setInputCitta] = useState("");
  const [inputEta, setInputEta] = useState(0);

  return (
    <div className="esercizio">
      <h2>ES 03 - Filtro lista utenti</h2>

      <input
        className="filtro-input"
        type="text"
        value={inputCitta}
        placeholder="Filtra per città"
        onChange={(e) => setInputCitta(e.target.value)}
      />

      <input
        className="filtro-input"
        type="number"
        value={inputEta}
        placeholder="Filtra per eta"
        min={1}
        max={99}
        onChange={(e) => setInputEta(e.target.value)}
      />

      <button
        onClick={() => dispatch({ type: "FILTRA_CITTA", payload: inputCitta })}
      >
        Filtra per città
      </button>
      <button
        onClick={() => dispatch({ type: "FILTRA_ETA", payload: inputEta })}
      >
        Filtra per età
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "FILTRA_TUTTO",
            payload: { citta: inputCitta, eta: inputEta },
          })
        }
      >
        Filtra tutto
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
          setInputCitta("");
          setInputEta("");
        }}
      >
        Reset
      </button>

      {/* TODO: mostra la lista filtrata */}
      <div className="utenti-flex-container scroll-x">
        {state.utenti.map((u) => (
          <div className="utente-card" key={u.id}>
            <div className="utente-nome">{u.nome}</div>
            <div className="utente-eta">Età: {u.eta}</div>
            <div className="utente-citta">{u.citta}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
