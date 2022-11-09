import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import InputSearch from "../components/InputSearch";
import NavigationBar from "../components/NavigationBar";
import iProduct from "../interfaces/iAuctionItem";

export default function Search() {
  // Global state
  const { code } = useParams();
  const navigate = useNavigate();

  // Local state
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState(new Array<iProduct>());

  // Properties
  // const endPoint = "http://localhost:9000/auctions/search/";
  const endPoint = "http://localhost:9000/auctions";

  // Methods
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
   console.log("handling on search page")
  };

  useEffect(() => {
    //    fetch(endPoint + code)
    fetch(endPoint)
      .then((response) => response.json())
      .then((json) => onSuccess(json))
      .catch((error) => onFailure(error));
  }, [code]);

  useEffect(() => {
    //    fetch(endPoint + code)
    fetch(endPoint)
      .then((response) => response.json())
      .then((json) => onSuccess(json))
      .catch((error) => onFailure(error));
  }, [searchTerm]);

  function onSuccess(data: iProduct[]) {
    setItems(data);
  }

  function onFailure(error: string) {
    console.error(error);
  }

  return (
    <div id="search">
      <div className="search-field">
        <InputSearch
          handleSearch={handleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <p>Search page for {code}</p>
      <CardContainer data={items} />
    </div>
  );
}
