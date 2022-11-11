/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";


import iProduct from "../interfaces/iAuctionItem";
import SingleProductCard from "../components/SingleProductCard";
import iBid from "../interfaces/iBid";

export default function SingleProduct() {

  // This code in the pageURL is the auction item id
  const params = useParams();
 // const [product, setProduct] = useState(new Array<iProduct>());
  const [product, setProduct] = useState(
    {id: 0,
    owner_id: 0,
    item_name: "",
    description: "",
    initial_price: 0,
    start_date: 0,
    stop_date: 0,  
    item_image_url: ""});
  const [readyForBids, setReadyForBids] = useState(false);
  const [bids, setBids] = useState(new Array<iBid>());

  const endPoint = `http://localhost:9000/auctions/${params.code}`;

  // Methods
  useEffect(() => {
    console.log(endPoint);
    fetch(endPoint)
      .then((response) => response.json())
      .then((json) => onSuccess(json))
      .catch((error) => onFailure(error));
  }, []);

  function onSuccess(data: iProduct) {
    setProduct(data);
    setReadyForBids(true);
  }

  function onFailure(error: string) {
    console.error(error);
  }
  console.log(product)

  useEffect(() => {
    const endPointBid = "http://localhost:9000/bids/";
    fetch(endPointBid + params.code)
      .then((response) => response.json())
      .then((json) => onSuccessBids(json))
      .catch((error) => onFailureBids(error));
  }, [readyForBids]);

  function onSuccessBids(data: iBid[]) {
    setBids(data);
    console.log(data);
  }

  function onFailureBids(error: string) {
    console.error(error);
  }

  return (
    <div id="singleProduct">
      <NavigationBar />
      <SingleProductCard data={product} />
    </div>
  );
}
