// npm
import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAuthContext } from "./useAuthContext";

export default function useLogout() {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  async function logout() {
    setError(null);
    setLoading(true);

    try {
      await signOut(auth).then(() => {
        dispatch({ type: "LOGOUT" });
      });
      if (!isCancelled) {
        setError(null);
        setLoading(false);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setLoading(false);
        console.error(err.message);
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, loading, logout };
}