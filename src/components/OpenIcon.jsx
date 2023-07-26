// npm
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

// files
import { useModal } from "../context/ModalContext";
import AdminCategoryDetail from "./AdminCategoryDetail";

export default function OpenIcon({ item }) {
  // properties
  const { setModal } = useModal();
  return (
    <button onClick={() => setModal(<AdminCategoryDetail item={item} />)}>
      <FontAwesomeIcon icon={faBoxOpen} color="#eba63f" size="2x" />
    </button>
  );
}
