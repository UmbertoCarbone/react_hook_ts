import { useState, useMemo } from "react";

export default function UseMemo_02() {
  // 1. Stato per l'input (stringa vuota all'inizio)
  const [nuovoCibo, setNuovoCibo] = useState("");
  // 2. Stato per l'array della lista (vuoto all'inizio)
  const [listaSpesa, setListaSpesa] = useState([]);
  // 3. Stato per lo sfondo (per testare che useMemo funzioni!)
  const [sfondoGiallo, setSfondoGiallo] = useState(false);

  // 4. La funzione per aggiungere l'elemento al click del bottone
  const aggiungiAllaLista = (e) => {
    e.preventDefault();
    if (nuovoCibo.trim() === "") return; // Evita di aggiungere spazi vuoti

    // Aggiungiamo la nuova parola all'array esistente
    setListaSpesa((prevLista) => [...prevLista, nuovoCibo]);

    // Svuotiamo l'input per il prossimo inserimento
    setNuovoCibo("");
  };

  // 5. useMemo: Conta le lettere SOLO quando 'listaSpesa' cambia davvero!
  const totaleLettere = useMemo(() => {
    return listaSpesa.reduce((totale, elemento) => {
      console.log("Calcolo in corso... 🧠");
      return totale + elemento.length;
    }, 0);
  }, [listaSpesa]); // <--- Dipende solo dall'array della lista!

  return (
    <div
      style={{
        backgroundColor: sfondoGiallo ? "yellow" : "white",
        padding: "20px",
        minHeight: "30vh",
      }}
      className="esercizio"
    >
      {/* Form per aggiungere elementi */}
      <form onSubmit={aggiungiAllaLista} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={nuovoCibo}
          onChange={(e) => setNuovoCibo(e.target.value)}
          placeholder="Inserisci un cibo..."
        />
        <button type="submit">Aggiungi alla lista</button>
      </form>

      <h3>La tua Spesa:</h3>
      <ul>
        {listaSpesa.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>

      <h2>Totale lettere nella lista: {totaleLettere}</h2>

      {/* Bottone per lo sfondo */}
      <button
        onClick={() => setSfondoGiallo(!sfondoGiallo)}
        style={{ marginBottom: "20px", marginTop: "20px" }}
      >
        Cambia sfondo
      </button>
    </div>
  );
}
