import { FormEvent, useState } from "react";

interface iProps {
  setSearchParams: Function;
  searchParams: any;
}

export default function InputSearch({ searchParams, setSearchParams }: iProps) {
  const [input, setInput] = useState("");

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const key: string = "query";
    const valuePair: string = "query" + "=" + input;
    const sp = new URLSearchParams(valuePair);
    setSearchParams(sp);
  };

  return (
    <form className="searchForm" onSubmit={(event) => handleSearch(event)}>
      <input
        id="searchInput"
        type="text"
        onChange={(event) => setInput(event.target.value)}
        placeholder="What are you looking for?"
      />
      <input className="searchButton" type="submit" value=""/>
    </form>
  );
}
