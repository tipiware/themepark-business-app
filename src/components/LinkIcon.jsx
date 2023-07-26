// npm
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToFile } from "@fortawesome/free-solid-svg-icons";

export default function LinkIcon({ route }) {
  return (
    <Link to={route}>
      <FontAwesomeIcon icon={faArrowRightToFile} color="#3cbcc3" size="2x" />
    </Link>
  );
}
