// npm
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { createPortal } from "react-dom";

export default function Modal({ modal, unSetModal }) {
  return createPortal(
    <div id="modal">
      <div className="modal__background">
        <div className="modal__content">{modal}</div>
        <button onClick={unSetModal} className="modal__button">
          <FontAwesomeIcon icon={faCircleXmark} color="#1d1d2c" size="2x" />
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
