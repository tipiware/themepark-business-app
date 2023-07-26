// npm
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// files
import useRecoverPassword from "../hooks/useRecoverPassword";

export default function PasswordRecovery() {
  // local state
  const [email, setEmail] = useState("");
  // properties
  const navigate = useNavigate();
  const { recoverPassword, error, loading, success } = useRecoverPassword();

  // methods
  function onHandleSubmit(event) {
    event.preventDefault();
    recoverPassword(email);
    setEmail("");
  }
  return (
    <section id="login">
      <form onSubmit={onHandleSubmit}>
        {loading && <p>Loading ...</p>}
        <label>
          Reset Password:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        {success && <p>{success}</p>}
        {error && <p>{error}</p>}
      </form>
      <button onClick={() => navigate(-1)}>go back</button>
    </section>
  );
}
