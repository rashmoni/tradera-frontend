/* eslint-disable jsx-a11y/alt-text */
//Node modules
import { Link, Navigate, useNavigate } from "react-router-dom";

// Project files
import Logo from "../assets/logos/logo.png";
import CustomerLinks from "../data/links-customer.json";

interface iProps {
  setUser: Function;
}

export default function NavigationBar({ setUser }: iProps) {
  const navigate = useNavigate();

  //Components
  const Links = CustomerLinks.map((item) => (
    <Link key={item.id} to={item.url}>
      {item.label}
    </Link>
  ));

  function handleClick(): void {
    setUser({ id: 0, name: "", email: "" });
    navigate("/");
  }

  return (
    <nav className="navigationBar">
      <Link to={CustomerLinks[0].url}>
        <img src={Logo} />
      </Link>
      <div className="navbarLinks">{Links}</div>
      <button
        className="button-signOut"
        onClick={() => {
          handleClick();
        }}
      >
        <p>Logout</p>
      </button>
    </nav>
  );
}
