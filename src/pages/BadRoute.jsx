// npm
import { Link } from "react-router-dom";

export default function BadRoute() {
  return (
    <div className="bad-route">
      <h1 className="heading-title">Woops, this is a url does not exist....</h1>
      <p>You have two choices - go home or go admin ?</p>
      <p>If you go admin and you dont have the passwords then ....</p>
      <div>
        <Link to="/" className="btn">
          I choose Home
        </Link>
        <Link to="/login" className="btn">
          I choose Admin
        </Link>
      </div>
    </div>
  );
}
