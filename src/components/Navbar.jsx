// npm
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/menu">Attraction</Link>
        </li>
        <li>
          <Link to="/" className="link-title">
            Main
          </Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login(Admin)</Link>
        </li>
      </ul>
    </nav>
  );
}
