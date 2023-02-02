import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import InputQuery from "../components/InputQuery";
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
    const key: string = "query";
    const valuePair: string = "query" + "=" + code;
    const searchParams = new URLSearchParams(valuePair);
    setSearchParams(searchParams);

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
      <div className="search-field">
        <InputQuery setSearchParams={setSearchParams} />
      </div>
      <CardContainer data={items} />
    </div>
  );
}
