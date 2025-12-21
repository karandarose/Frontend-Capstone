import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
      <NavLink to="/products">
        <button>Products</button>
      </NavLink>
      <NavLink to="/contact">
        <button>Contact</button>
      </NavLink>
      <NavLink to="/about">
        <button>About</button>
      </NavLink>
      <NavLink to="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
      </NavLink>
    </nav>
  );
}
