// npm
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

// files
import { useModal } from "../context/ModalContext";
import ConfirmDelete from "./ConfirmDelete";

export default function TrashIcon({ id, path, imgPath }) {
  // properties
  const { setModal } = useModal();
  return (
    <button
      onClick={() =>
        setModal(<ConfirmDelete id={id} path={path} imgPath={imgPath} />)
      }
    >
      <FontAwesomeIcon icon={faTrashAlt} color="#e40c2b" size="2x" />
    </button>
  );
}
