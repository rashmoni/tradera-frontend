/* eslint-disable jsx-a11y/alt-text */
import { FormEvent, useEffect, useState } from "react";
import BackgroundImage from "../assets/images/banner.jpg";

interface iProps {
  setItems: Function;
}

export default function Banner({ setItems }: iProps) {
  // Local state
  const [searchTerm, setSearchTerm] = useState("");
  const [submitted, setSubmitted] = useState(false);
 
  // Methods
  useEffect(() => {
    fetch("http://localhost:9000/auctions/?search=".concat(searchTerm))
      .then((response) => response.json())
      .then((json) => setItems(json));
      console.log(searchTerm);
  }, [submitted]);
  

  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setSubmitted(!submitted);
  }

  return (
    <header className="banner">
      <img className="backgroundImage" src={BackgroundImage} />
      <form id="searchForm" onSubmit={(event) => onSubmit(event)}>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <input type="submit" value="search" />
      </form>
    </header>
  );
}
