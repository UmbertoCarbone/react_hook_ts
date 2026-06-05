import UseRef01 from "../components/ref/UseRef01"
import UseRef02 from "../components/ref/UseRef02"
import UseRef03 from "../components/ref/UseRef03"

export default function RefPage() {
  return (
    <>
      <h1 className="esercizio" style={{ textAlign: "center" }}>
        Esercizi con useRef
      </h1>
      <UseRef01/>
      <UseRef02/>
      <UseRef03/>
    </>
  );
}
