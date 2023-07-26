import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { fireStore } from "../firebase/firebase";

export default function useCollection(path) {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = collection(fireStore, path);

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error.message);
        setError("Could not load data");
      }
    );

    // unsubscribe method
    return () => unsubscribe();
  }, [path]);

  return { documents, error };
}