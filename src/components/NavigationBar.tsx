//Node modules
import { Link } from "react-router-dom";

// Project files
import CustomerLinks from "../data/links-customer.json";

export default function NavigationBar() {
  //Components
  const Links = CustomerLinks.map((item) => (
    <Link key={item.id} to={item.url}>
      {item.label}
    </Link>
  ));
  return (
    <nav className="navigationBar">
      <Link to={CustomerLinks[0].url}>Tradera logo</Link>
      {Links}
    </nav>
  );
}
