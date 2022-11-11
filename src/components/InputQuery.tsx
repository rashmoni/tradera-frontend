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
    <form onSubmit={(event) => handleSearch(event)}>
      <input
        id="search-form"
        type="text"
        onChange={(event) => setInput(event.target.value)}
        placeholder="What are you looking for?"
      />
      <input type="submit" value="search" />
    </form>
  );
}