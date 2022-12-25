import { Link } from "react-router-dom";
const NavbarLanding = () => {
  return (
    <div className="nav2">
      <Link to={"/landing/list"} className="btnH">
        List
      </Link>
      <Link to={"/landing/create"} className="btnH">
        Create
      </Link>
    </div>
  );
};

export default NavbarLanding;
