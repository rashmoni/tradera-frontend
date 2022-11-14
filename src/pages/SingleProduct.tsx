/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";


import iProduct from "../interfaces/iAuctionItem";
import SingleProductCard from "../components/SingleProductCard";
import iBid from "../interfaces/iBid";
import SingleProductPageService from "../services/SingleProductPageService";

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

  // Methods
  useEffect(() => {
    fetchProductData();
  }, []);
  const fetchProductData = () => {
    SingleProductPageService.getProductById(params.code)
      .then((json) => onSuccess(json))
      .catch((error) => onFailure(error));
  }
  function onSuccess(data: iProduct) {
    setProduct(data);
    setReadyForBids(true);
  }

  function onFailure(error: string) {
    console.error(error);
  }
  console.log(product)

  useEffect(() => {
    SingleProductPageService.getBidByItemId()
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
      <SingleProductCard data={product} bids={bids} />
    </div>
  );
}
