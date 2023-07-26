
//npm
import { useReducer } from "react";
import { setDoc, doc, addDoc, deleteDoc, collection } from "firebase/firestore";

// files
import { fireStore } from "../firebase/firebase";

// properties
const initState = {
  document: null,
  isLoading: false,
  error: null,
  success: null,
};

// reducer method
function firebaseReducer(state, action) {
  switch (action.type) {
    case "IS_PENDING": {
      return { document: null, isLoading: true, error: null, success: null };
    }
    case "ADD_DOC": {
      return {
        document: action.payload,
        isLoading: false,
        error: null,
        success: true,
      };
    }
    case "DELETE_DOC":
      return { isPending: false, document: null, success: true, error: null };
    case "ERROR": {
      return {
        document: null,
        isLoading: false,
        error: action.payload,
        success: null,
      };
    }
    default:
      return state;
  }
}

export default function useFirebase() {
  const [response, dispatch] = useReducer(firebaseReducer, initState);

  // add doc
  async function addDocument(path, id, data) {
    dispatch({ type: "IS_PENDING" });
    try {
      const ref = doc(fireStore, path, id);
      const document = await setDoc(ref, data);
      dispatch({ type: "ADD_DOC", payload: document });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    }
  }

  // delete doc
  async function deleteDocument(path, id) {
    dispatch({ type: "IS_PENDING" });
    try {
      const ref = doc(fireStore, path, id);
      await deleteDoc(ref);
      dispatch({ type: "DELETE_DOC" });
    } catch (err) {
      dispatch({ type: "ERROR", payload: "Could not delete" });
    }
  }

  // add user contact
  async function addContact(path, data) {
    dispatch({ type: "IS_PENDING" });
    try {
      const ref = collection(fireStore, path);
      const document = await addDoc(ref, data);
      // const document = await addDoc(collection(fireStore, data));
      dispatch({ type: "ADD_DOC", payload: document });
    } catch (err) {
      dispatch({
        type: "ERROR",
        payload:
          "Unable to send your enquiry.  Please check all fields are filled in correctly",
      });
    }
  }

  return { addDocument, deleteDocument, addContact, response };
}