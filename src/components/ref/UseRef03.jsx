import { useRef, useState } from "react";

export default function UseRef03() {
  // Inizializzi un array vuoto
  const inputsRef = useRef([]);

  const [form, setForm] = useState({ Username: "", Email: "", Password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Raccogliamo i dati dallo Stato
    const datiUseState = form;

    // 2. Raccogliamo i dati dai Ref

    const datiRef = {
      nome: inputsRef.current[0].value,
      cognome: inputsRef.current[1].value,
      telefono: inputsRef.current[2].value,
      indirizzo: inputsRef.current[3].value,
      note: inputsRef.current[4].value,
    };

    // 3. Uniamo tutto in un unico grande oggetto "datiCompleti"
    const datiCompleti = {
      ...datiUseState,
      ...datiRef,
    };

    console.log("Form inviato con successo:", datiCompleti);

    // 4. Reset totale
    // Svuotiamo lo stato
    setForm({ Username: "", Email: "", Password: "" });
    // Svuotiamo i ref
    inputsRef.current.value = "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev, // Copia i campi esistenti (es: email e password)
      [name]: value, // Aggiorna solo il campo che ha cambiato nome
    }));
  };

  return (
    <div className="esercizio">
        <h2>ES 03 - UseRef & useState || Form completo</h2>
    <form onSubmit={handleSubmit}>
      {/* --- PARTE 1: USATE (CONTROLLATI) --- */}
      <input
        type="text"
        name="Username" // <--- AGGIUNGI QUESTO
        value={form.Username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="Email" // <--- AGGIUNGI QUESTO
        value={form.Email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="Password" // <--- AGGIUNGI QUESTO
        value={form.Password}
        onChange={handleChange}
        placeholder="Password"
      />

      {/* --- PARTE 2: USE REF (NON CONTROLLATI) --- */}
      <input ref={(el) => (inputsRef.current[0] = el)} placeholder="Nome" />
      <input ref={(el) => (inputsRef.current[1] = el)} placeholder="Cognome" />
      <input ref={(el) => (inputsRef.current[2] = el)} placeholder="Telefono" />
      <input
        ref={(el) => (inputsRef.current[3] = el)}
        placeholder="Indirizzo"
      />
      <input ref={(el) => (inputsRef.current[4] = el)} placeholder="Note" />

      <button type="submit">Invia tutto</button>
    </form>
    </div>
  );
}
