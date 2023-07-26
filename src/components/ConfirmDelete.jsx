// npm
import { useModal } from "../context/ModalContext";

// files
import useFirebase from "../hooks/useFirebase";
import { deleteFile } from "../firebase/cloudStorage";

export default function ConfirmDelete({ path, imgPath, id }) {
  // properties
  const { deleteDocument } = useFirebase();
  const { unSetModal } = useModal();

  // method
  async function deleteItem() {
    await deleteFile(imgPath);
    deleteDocument(path, id);
    unSetModal();
  }

  return (
    <div className="delete">
      <h1>Are you sure you wish to delete this item?</h1>
      <p>
        If <span>yes</span> then it means forever !!
      </p>
      <div className="delete__buttons">
        <button onClick={unSetModal}>Cancel</button>
        <button onClick={deleteItem}>Yes, delete</button>
      </div>
    </div>
  );
}
