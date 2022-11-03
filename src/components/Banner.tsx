import { FormEvent, useEffect, useState } from "react";
import BackgroundImage from "../assets/images/banner.jpg";
import NavigationBar from "./NavigationBar";

interface iProps {
  setProducts: Function;
}

export default function Banner({ setProducts }: iProps) {
  // Local state
  const [searchTerm, setSearchTerm] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Methods
  useEffect(() => {
    fetch("http://localhost:8080/products/?search=".concat(searchTerm))
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, [submitted]);

  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    setSubmitted(!submitted);
    event.preventDefault();
  }

  return (
    <header className="banner">
      <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      <input type="submit" value="search" />
      <NavigationBar />
      
      <img className="backgroundImage" src={BackgroundImage} />
      <form id="searchForm" onSubmit={(event) => onSubmit(event)}>
        
        
      </form>
    </header>
  );
}
