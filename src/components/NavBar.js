import "../style/NavBar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"} className="btnR">
            Home
          </Link>
        </li>
        <li>
          <Link to={"/landing"} className="btnR">
            Landing
          </Link>
        </li>
        <li>
          <Link to={"/neas/list"} className="btnR">
            Neas
          </Link>
        </li>
        <li>
          <Link to={"/app"} className="btnR">
            Extra
          </Link>
        </li>
      </ul>
    </nav>
  );
}
