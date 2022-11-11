/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";


import iProduct from "../interfaces/iAuctionItem";
import SingleProductCard from "../components/SingleProductCard";

export default function SingleProduct() {

  // This code in the pageURL is the auction item id
  const params = useParams();
  const [product, setProduct] = useState(new Array<iProduct>())

  const endPoint = `http://localhost:9000/auctions/${params.code}`;

  // Methods
  useEffect(() => {
    fetch(endPoint)
      .then((response) => response.json())
      .then((json) => onSuccess(json))
      .catch((error) => onFailure(error));
  }, []);

  function onSuccess(data: iProduct[]) {
    setProduct(data);
  }

  function onFailure(error: string) {
    console.error(error);
  }
  console.log(product)

  return (
    <div id="singleProduct">
      <NavigationBar />
      <SingleProductCard data={product} />
    </div>
  );
}
