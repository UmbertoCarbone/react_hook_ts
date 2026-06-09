import { useState, useMemo } from "react";
const listaSpesa = ["Pane", "Latte", "Uova", "Farina", "Zucchero",'Pasta',];
export default function UseMemo_01() {
  

  const [sfondoGiallo, setSfondoGiallo] = useState(false);

  const totaleLettere = useMemo(() => {
    return listaSpesa.reduce((totale, elemento) => {
      console.log("sto contando le lettere...");
      return totale + elemento.length;
    }, 0);
  }, [listaSpesa]);

  return (
    <div
      className="esercizio"
      style={{
        backgroundColor: sfondoGiallo ? "yellow" : "white",
        padding: "20px",
      }}
    >
      {listaSpesa.map((elemento) => (
        <p key={elemento}>{elemento}</p>
      ))}
      <h1 className="esercizio">Totale lettere: {totaleLettere}</h1>
      <button onClick={() => setSfondoGiallo(!sfondoGiallo)}>
        Cambia sfondo
      </button>
    </div>
  );
}
