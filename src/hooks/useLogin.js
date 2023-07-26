// npm
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

// files
import { auth } from "../firebase/firebase";
import { useAuthContext } from "./useAuthContext";

export default function useLogin() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  async function login(email, password) {
    setError(null);
    setLoading(true);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: "LOGIN", payload: res.user });
      if (!isCancelled) {
        setError(null);
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setLoading(false);
      // if (!isCancelled) {
      //   console.log(err.message);
      //   setError(err.message);
      //   setLoading(false);
      // }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { login, error, loading };
}