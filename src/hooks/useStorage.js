// npm
import { useReducer } from "react";
import { getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";
import { ref } from "firebase/storage";

// files
import { storage } from "../firebase/firebase";

// properties
const initState = {
  document: null,
  isLoading: false,
  error: null,
  success: null,
};

function storageReducer(state, action) {
  switch (action.type) {
    case "IS_PENDING": {
      return { document: null, isLoading: true, error: null, success: null };
    }
    case "UPLOAD_FILE": {
      return {
        document: action.payload,
        isLoading: false,
        error: null,
        success: true,
      };
    }
    case "DELETE_FILE":
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

export default function useStorage() {
  const [res, dispatch] = useReducer(storageReducer, initState);

  // upload file to storage
  async function createFile(path, file) {
    dispatch({ type: "IS_PENDING" });
    try {
      const fileReference = ref(storage, path);
      await uploadBytes(fileReference, file);
      const document = await getDownloadURL(fileReference);
      dispatch({ type: "UPLOAD_FILE", payload: document });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    }
  }

  // delete file from storage
  async function deleteFile(path) {
    dispatch({ type: "IS_PENDING" });
    try {
      const fileReference = ref(storage, path);
      const document = await deleteObject(fileReference);
      dispatch({ type: "DELETE_FILE", payload: document });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    }
  }
  return { createFile, deleteFile, res };
}