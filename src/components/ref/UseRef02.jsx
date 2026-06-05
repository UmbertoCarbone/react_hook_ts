import { useRef, useState } from "react";

export default function UseRef02() {
  const emailRef = useRef();
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Username: ${username} Email: ${emailRef.current.value}`);

    setUsername("");
    emailRef.current.value = "";
  };
  return (
    <div className="esercizio">
        <h2>ES 02 - UseRef & useState</h2>
      <form onSubmit={handleSubmit}>
        {/* Input controllato da useState */}
        <input
          type="text"
          onChange={handleChange}
          value={username}
          placeholder="Username"
        />
        {username.length < 5 && <p>Troppo corto!</p>}

        {/* Input controllato da useRef */}
        <input type="email" ref={emailRef} placeholder="Email" />

        <button type="submit">Invia</button>
      </form>
    </div>
  );
}
