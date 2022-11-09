/* eslint-disable jsx-a11y/alt-text */

import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../assets/images/banner.jpg";
import InputSearch from "./InputSearch";

export default function Banner() {
  // Global state
  const navigate = useNavigate();

  // Local state
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm) {
      navigate(`search/${searchTerm}`);
    }
  };

  return (
    <header className="banner">
      <img className="backgroundImage" src={BackgroundImage} />
      <InputSearch
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </header>
  );
}
