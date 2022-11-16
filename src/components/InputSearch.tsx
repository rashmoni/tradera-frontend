import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

/*
interface iProps {
  handleSearch: Function;
  searchTerm: any;
  setSearchTerm: Function;
}
*/

export default function InputSearch() {
  // Global state
  const navigate = useNavigate();

  // Local state
  const [searchTerm, setSearchTerm] = useState("");

  // Methods
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchTerm) {
      navigate(`search/${searchTerm}`);
    }
  };

  return (
    <form id="searchForm" onSubmit={(event) => handleSearch(event) }>
      <input
        id="searchInput"
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="What are you looking for?"
      />
    </form>
  );
}
