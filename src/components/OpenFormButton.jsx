// npm
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

// files
import { useModal } from "../context/ModalContext";

export default function OpenFormButton({ form }) {
  // properties
  const { setModal } = useModal();
  return (
    <div
      className="open-form"
      style={{ marginTop: "5rem", textAlign: "center" }}
    >
      <button onClick={() => setModal(form)}>
        <FontAwesomeIcon icon={faCirclePlus} color="#b2beb5" size="3x" />
      </button>
    </div>
  );
}
