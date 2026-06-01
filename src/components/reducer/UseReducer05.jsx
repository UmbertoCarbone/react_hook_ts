import { useReducer } from "react";
const domande = [
  {
    id: 1,
    testo: "Qual è la capitale d'Italia?",
    opzioni: ["Milano", "Roma", "Napoli"],
    corretta: 1,
  },
  {
    id: 2,
    testo: "Quanti pianeti ha il sistema solare?",
    opzioni: ["7", "8", "9"],
    corretta: 1,
  },
  {
    id: 3,
    testo: "Chi ha dipinto la Gioconda?",
    opzioni: ["Michelangelo", "Raffaello", "Leonardo da Vinci"],
    corretta: 2,
  },
  {
    id: 4,
    testo: "Qual è il risultato di 12 × 12?",
    opzioni: ["124", "164", "144"],
    corretta: 2,
  },
  {
    id: 5,
    testo: "In che anno è finita la Seconda Guerra Mondiale?",
    opzioni: ["1943", "1944", "1945"],
    corretta: 2,
  },
  {
    id: 6,
    testo: "Qual è l'elemento chimico con simbolo 'O'?",
    opzioni: ["Oro", "Ossigeno", "Osmio"],
    corretta: 1,
  },
  {
    id: 7,
    testo: "Quale paese ha vinto i Mondiali di calcio 2006?",
    opzioni: ["Francia", "Italia", "Brasile"],
    corretta: 1,
  },
  {
    id: 8,
    testo: "Quante corde ha una chitarra classica?",
    opzioni: ["4", "5", "6"],
    corretta: 2,
  },
  {
    id: 9,
    testo: "Qual è il fiume più lungo del mondo?",
    opzioni: ["Rio delle Amazzoni", "Nilo", "Mississippi"],
    corretta: 1,
  },
  {
    id: 10,
    testo: "Quanti lati ha un esagono?",
    opzioni: ["5", "6", "7"],
    corretta: 1,
  },
];

function sorteggiaDomande() {
  return [...domande].sort(() => Math.random() - 0.5).slice(0, 3);
}

const initialState = {
  domande: [], // verranno generate quando l'utente preme "Inizia Quiz"
  domandaCorrente: 0,
  punteggio: 0,
  rispostaData: null,
  completato: false,
  started: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "START": {
      return {
        ...state,
        domande: sorteggiaDomande(),
        domandaCorrente: 0,
        punteggio: 0,
        rispostaData: null,
        completato: false,
        started: true,
      };
    }
    case "RISPONDI": {
      // 1. prendo la domanda che l'utente sta vedendo adesso
      const domandaAttuale = state.domande[state.domandaCorrente];

      // 2. confronto l'indice cliccato (payload) con l'indice corretto
      const isCorretta = action.payload === domandaAttuale.corretta;

      // 3. restituisco il nuovo state
      return {
        ...state, // copio tutto il resto
        punteggio: isCorretta ? state.punteggio + 1 : state.punteggio,
        rispostaData: isCorretta ? "corretta" : "sbagliata",
      };
    }
    case "PROSSIMA": {
      const next = state.domandaCorrente + 1;
      if (next >= state.domande.length) {
        return { ...state, completato: true, rispostaData: null };
      }
      return { ...state, domandaCorrente: next, rispostaData: null };
    }

    case "RESET": {
      return {
        domande: [],
        domandaCorrente: 0,
        punteggio: 0,
        rispostaData: null,
        completato: false,
        started: false,
      };
    }
  }
}

export default function UseReducer05() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="esercizio">
      <h2>ES 06 - Quiz (useReducer)</h2>

      {!state.started ? (
        <div style={{ textAlign: "center", padding: 20 }}>
          <p>Pronto per iniziare il quiz? Verranno mostrate 3 domande a caso.</p>
          <button onClick={() => dispatch({ type: "START" })}>Inizia Quiz</button>
        </div>
      ) : state.completato ? (
        <div style={{ textAlign: "center", padding: 20 }}>
          <p>Quiz completato! Hai totalizzato {state.punteggio} punti su {state.domande.length}.</p>
          <button onClick={() => dispatch({ type: "RESET" })}>Restart</button>
        </div>
      ) : (
        <>
          <p>
            Domanda {state.domandaCorrente + 1} / {state.domande.length}
          </p>

          <h3>{state.domande[state.domandaCorrente].testo}</h3>

          <div>
            {state.domande[state.domandaCorrente].opzioni.map((opt, idx) => (
              <button
                key={idx}
                disabled={state.rispostaData !== null}
                onClick={() => dispatch({ type: "RISPONDI", payload: idx })}
              >
                {opt}
              </button>
            ))}
          </div>

          {state.rispostaData && (
            <>
              <p style={{ marginTop: 12 }}>
                {state.rispostaData === "corretta" ? "Corretto!" : "Sbagliato!"}
              </p>
              <button onClick={() => dispatch({ type: "PROSSIMA" })}>
                Prossima
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}
