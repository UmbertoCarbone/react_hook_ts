import { useReducer } from "react";

//TODO:
const catalogo = [
  { id: 1, nome: "Pasta", prezzo: 1.5 },
  { id: 2, nome: "Pane", prezzo: 0.9 },
  { id: 3, nome: "Latte", prezzo: 1.2 },
  { id: 4, nome: "Mela", prezzo: 0.5 },
];

//TODO:
const initialState = { prodotti: [], totale: 0 };

//TODO:
function reducer(state, action) {
  switch (action.type) {
    case "AGGIUNGI": {
      const nuoviProdotti = [...state.prodotti, action.payload];
      return {
        prodotti: nuoviProdotti,
        totale: nuoviProdotti.reduce((acc, p) => acc + p.prezzo, 0),
      };
    }
    case "RIMUOVI_ITEM": {
      const rimuoviProdotto = state.prodotti.filter(
        (p) => p.id !== action.payload,
      );
      return {
        prodotti: rimuoviProdotto,
        totale: rimuoviProdotto.reduce((acc, p) => acc + p.prezzo, 0),
      };
    }

    case "SVUOTA_LISTA": {
      return initialState;
    }

    default:
      return state;
  }
}

export default function UseReducer04() {
  //TODO:
  const [state, dispatch] = useReducer(reducer, initialState);

 

  return (
    <>
      <div className="esercizio">
        <h2>ES 04 - Filtro lista della Spesa</h2>

        <div className="carrello-catalogo">
          {/* Colonna sinistra: catalogo */}
          <div className="carrello-sezione">
            <h3>Catalogo</h3>
            <ul>
              {catalogo.map((product) => {
                const giaAggiunto = state.prodotti.find((p) => p.id === product.id);
                return (
                  <li key={product.id}>
                    <span>{product.nome} — €{product.prezzo.toFixed(2)}</span>
                    <button
                      className="btn-aggiungi"
                      disabled={giaAggiunto}
                      onClick={() => dispatch({ type: "AGGIUNGI", payload: product })}
                    >
                      Aggiungi
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Colonna destra: carrello */}
          <div className="carrello-sezione">
            <h3>Carrello</h3>
            {state.prodotti.length === 0 ? (
              <p style={{ color: "#aaa" }}>Nessun prodotto aggiunto.</p>
            ) : (
              state.prodotti.map((p) => (
                <div key={p.id} className="carrello-item">
                  <span>{p.nome} — €{p.prezzo.toFixed(2)}</span>
                  <button
                    className="btn-rimuovi"
                    onClick={() => dispatch({ type: "RIMUOVI_ITEM", payload: p.id })}
                  >
                    Rimuovi
                  </button>
                </div>
              ))
            )}
            <p className="carrello-totale">Totale: €{state.totale.toFixed(2)}</p>
            <button
              className="btn-svuota"
              onClick={() => dispatch({ type: "SVUOTA_LISTA" })}
            >
              Svuota Lista
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
