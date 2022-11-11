import { FormEvent, useEffect, useState } from "react";
import {
  useParams,
  useSearchParams,
} from "react-router-dom";
import CardContainer from "../components/CardContainer";
import InputQuery from "../components/InputQuery";
import NavigationBar from "../components/NavigationBar";
import iProduct from "../interfaces/iAuctionItem";


export default function Search() {
  // Global state
  const { code } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  // Local state
  const [items, setItems] = useState(new Array<iProduct>());

  // Properties
  const endPoint = "http://localhost:9000/auctions/search/";

  useEffect(() => {
    fetch(endPoint + searchParams.get("query"))
      .then((response) => response.json())
      .then((json) => onSuccess(json))
      .catch((error) => onFailure(error));
  }, [searchParams]);

  useEffect(() => {
    fetch(endPoint + code)
      .then((response) => response.json())
      .then((json) => onSuccess(json))
      .catch((error) => onFailure(error));
  }, [code]);

  function onSuccess(data: iProduct[]) {
    setItems(data);
  }

  function onFailure(error: string) {
    console.error(error);
  }

  return (
    <div id="search">
      <NavigationBar />
      <div className="search-field">
        <InputQuery
          setSearchParams={setSearchParams}
          searchParams={searchParams}
        />
      </div>
      <CardContainer data={items} />
    </div>
  );
}
