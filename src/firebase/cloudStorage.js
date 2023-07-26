import { ref } from "firebase/storage";
import { getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";

import { storage } from "./firebase";

export async function createFile(filePath, file) {
  const fileReference = ref(storage, filePath);

  await uploadBytes(fileReference, file);
  return await getDownloadURL(fileReference);
}

export async function deleteFile(filePath) {
  const fileReference = ref(storage, filePath);

  await deleteObject(fileReference);
}