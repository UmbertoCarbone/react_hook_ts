import { useState } from "react";

// Hook personalizzato per localStorage
function useLocalStorage(chiave, valoreIniziale) {
  const [valore, setValore] = useState(() => {
    try {
      const salvato = localStorage.getItem(chiave);
      return salvato !== null ? JSON.parse(salvato) : valoreIniziale;
    } catch {
      return valoreIniziale;
    }
  });

  const salva = (nuovoValore) => {
    setValore(nuovoValore);
    localStorage.setItem(chiave, JSON.stringify(nuovoValore));
  };

  const rimuovi = () => {
    setValore(valoreIniziale);
    localStorage.removeItem(chiave);
  };

  return [valore, salva, rimuovi];
}

export default function UseStorage01() {
  const [nome, setNome, rimuoviNome] = useLocalStorage("nome-utente", "");
  const [bozza, setBozza] = useLocalStorage("bozza-testo", "");

  return (
    <div className="esercizio">
      <h2>ES 01 - Browser Storage con hook personalizzato</h2>

      <p>
        <strong>Nome utente (persiste al refresh):</strong>
      </p>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Inserisci il tuo nome..."
      />
      <button onClick={rimuoviNome}>Cancella nome</button>

      <hr />

      <p>
        <strong>Bozza di testo (persiste al refresh):</strong>
      </p>
      <textarea
        value={bozza}
        onChange={(e) => setBozza(e.target.value)}
        placeholder="Scrivi qualcosa, poi ricarica la pagina..."
        rows={4}
        style={{ display: "block", width: "100%", marginBottom: "8px" }}
      />

      <p>
        <small>
          Ricarica la pagina: i valori rimangono grazie a{" "}
          <code>localStorage</code>.
        </small>
      </p>
    </div>
  );
}
