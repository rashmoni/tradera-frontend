/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

import iProduct from "../interfaces/iAuctionItem";
import SingleProductCard from "../components/SingleProductCard";
import iBid from "../interfaces/iBid";
import SingleProductPageService from "../services/SingleProductPageService";
import iUser from "../interfaces/iUser";
import LoginScreen from "./LoginScreen";

interface iProps {
  user: iUser;
  setUser: Function;
}

export default function SingleProduct({ user, setUser }: iProps) {
  // This code in the pageURL is the auction item id
  const params = useParams();
  // const [product, setProduct] = useState(new Array<iProduct>());
  const [product, setProduct] = useState({
    id: 0,
    owner_id: 0,
    item_name: "",
    description: "",
    initial_price: 0,
    start_date: 0,
    stop_date: 0,
    item_image_url: "",
  });
  const [readyForBids, setReadyForBids] = useState(false);
  

  // Methods
  useEffect(() => {
    fetchProductData();
  }, []);
  const fetchProductData = () => {
    SingleProductPageService.getProductById(params.code)
      .then((json) => onSuccess(json))
      .catch((error) => onFailure(error));
  };
  function onSuccess(data: iProduct) {
    setProduct(data);
    setReadyForBids(true);
  }

  function onFailure(error: string) {
    console.error(error);
  }
  console.log(product);


  if (user.id === 0) return <LoginScreen user={user} setUser={setUser} />;

  return (
    <div id="singleProduct">
      <SingleProductCard data={product}  />
    </div>
  );
}
