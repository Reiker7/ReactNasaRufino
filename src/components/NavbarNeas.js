import { Link } from "react-router-dom";
const NavBarNeas = () => {
  return (
    <div className="nav2">
      <Link to={"/neas/list"} className="btnH">
        List
      </Link>
      <Link to={"/neas/create"} className="btnH">
        Create
      </Link>
    </div>
  );
};

export default NavBarNeas;
