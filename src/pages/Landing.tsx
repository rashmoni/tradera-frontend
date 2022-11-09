import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import CardContainer from "../components/CardContainer";
import NavigationBar from "../components/NavigationBar";

import iProduct from "../interfaces/iAuctionItem";

export default function Landing() {
  // Local state
  const [items, setItems] = useState(new Array<iProduct>());

  // Properties
  const endPoint = "http://localhost:9000/auctions";

  // Methods
  useEffect(() => {
    fetch(endPoint)
      .then((response) => response.json())
      .then((json) => onSuccess(json))
      .catch((error) => onFailure(error));
  }, []);

  function onSuccess(data: iProduct[]) {
    setItems(data);
  }

  function onFailure(error: string) {
    console.error(error);
  }

  console.log(items);

  return (
    <div id="landing">
      <NavigationBar />
      <Banner />
      <CardContainer data={items} />
    </div>
  );
}
