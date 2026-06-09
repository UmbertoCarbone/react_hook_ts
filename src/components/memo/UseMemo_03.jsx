import { useState, useMemo } from "react";

export default function UseMemo_03() {
  // 1. Lo stato con l'array dei voti iniziali
  const [voti, setVoti] = useState([4, 7, 5, 8, 6, 3, 9]);

  // 2. Uno stato indipendente (un semplice contatore di click)
  const [clickCount, setClickCount] = useState(0);

  const votiSufficienti = useMemo(() => {
    return voti.filter((v) => {
      console.log("Sto filtrando i voti...");
      return v >= 6; 
    }); 
  }, [voti]);

  return (
    <div className="esercizio">
      <p>{votiSufficienti.join(", ")}</p>
      <button onClick={() => setClickCount(clickCount + 1)}>
        Click count: {clickCount}
      </button>
    </div>
  );
}
