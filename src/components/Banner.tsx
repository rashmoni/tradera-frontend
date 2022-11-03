/* eslint-disable jsx-a11y/alt-text */
import { FormEvent, useEffect, useState } from "react";
import BackgroundImage from "../assets/images/banner.jpg";

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
      <img 
      className="backgroundImage" 
      src={BackgroundImage} 
      />
      
    </header>
  );
}
