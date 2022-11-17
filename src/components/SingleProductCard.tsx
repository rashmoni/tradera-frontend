/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import StatusEmpty from "./StatusEmpty";
import iAuctionItem from "../interfaces/iAuctionItem";
import Placeholder from "../assets/images/placeholder.jpg";
import iBid from "../interfaces/iBid";
import SingleProductPageService from "../services/SingleProductPageService";

interface iProps {
  data: iAuctionItem;
}

export default function SingleProductCard({ data}: iProps) {
  // Local state
const [newBid, setNewBid] = useState({})
const [bids, setBids] = useState(new Array<iBid>());
const [initialBid, setInitialBid] = useState(0)

useEffect(() => {
  SingleProductPageService.getBidByItemId(data.id)
    .then((json) => onSuccessBids(json))
    .catch((error) => onFailureBids(error));
}, [newBid, data]);

// eslint-disable-next-line react-hooks/exhaustive-deps
function onSuccessBids(bidData: iBid[]) {
  console.log("Bid data "+bidData)
  setBids(bidData);
  setInitialBid(SingleProductPageService.setBidPrice(bidData, data.initial_price));
}
console.log(bids)
function onFailureBids(error: string) {
  console.error("Error while fetching biding data "+error);
}

  async function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const bidderId = sessionStorage.getItem("UserId");
    const productId = data.id;
    setNewBid({traderId : bidderId,
              auctionItemId: productId,
              amount: initialBid+10});
    SingleProductPageService.createNewBid(newBid)
      .then(onSuccess)
      .catch((error) => onFailure(error));
  }

  function onSuccess() {
    console.log("Bidding!"+initialBid);
    setInitialBid(initialBid+10);
  }

  function onFailure(error: string) {
    console.error(error);
    alert("Could not bid on item");
  }

  function dateComparison(product_end_date: any){
    const currentDate = formatDate(new Date());
      console.log(product_end_date);
      console.log(currentDate);
      if(product_end_date < currentDate){
       return true;
      } 
  }

function formatDate(date: Date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-') 
  );
}

function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}
  // Safeguard
  // if (data.length === 0) return <StatusEmpty />;
  if (data === null) return <StatusEmpty />;
 
  return (
    <div className="singleProductContainer">
      <section className="imageContainer">
        <img
          src={data.item_image_url ?? ""}
          onError={(event) => (event.currentTarget.src = Placeholder)}
          style={{ objectFit: "contain" }}
        />
        <span style={{ display: "block" }}></span>
      </section>
      <section className="productDetailContainer">
        <div>
          <h1 style={{ marginTop: "10px" }}>{data.item_name}</h1>
          <p>Asking price</p>
          <h1>SEK {data.initial_price}</h1>
          <p>Heighest bid: {initialBid}</p>
          <h2>Description:</h2>
          <p>{data.description}</p>
          <p>Ends : {data.stop_date}</p>
           {!dateComparison(data.stop_date) && <button className="productBid" style={{ width: "40%" }}
          onClick={onClick} >
            Bid
          </button>}
        </div>
      </section>
    </div>
  );
}
