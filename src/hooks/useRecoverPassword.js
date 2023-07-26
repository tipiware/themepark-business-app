// npm
import { useState, useEffect } from "react";

// files
import { auth } from "../firebase/firebase";
import { useAuthContext } from "./useAuthContext";
import { sendPasswordResetEmail } from "firebase/auth";

export default function useRecoverPassword() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  async function recoverPassword(email) {
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const res = await sendPasswordResetEmail(auth, email);
      dispatch({ type: "RESET_PASSWORD", payload: res });
      console.log(email);
      setSuccess(
        `An email has been sent to ${email} with instructions to update your password. Please check your spam folder if you cannot find email!`
      );
      setLoading(false);
      setError(null);
      if (!isCancelled) {
        setError(null);
        setLoading(false);
        setSuccess(null);
      }
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setLoading(false);
      setSuccess(null);
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { recoverPassword, error, loading, success };
}