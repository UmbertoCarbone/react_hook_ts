
import { useRef } from 'react';

export default function UseRef04() {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const messageRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value
    };

    console.log(formData);
    // Reset form
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" ref={nameRef} />
        </label><br />

        <label>
          Email:
          <input type="email" ref={emailRef} />
        </label><br />

        <label>
          Messaggio:
          <textarea ref={messageRef} rows="4"></textarea>
        </label><br />

        <button type="submit">Invia</button>
      </form>
    </div>
  );
};



