import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  );
}
