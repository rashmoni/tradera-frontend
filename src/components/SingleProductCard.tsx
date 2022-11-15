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
  SingleProductPageService.getBidByItemId()
    .then((json) => onSuccessBids(json))
    .catch((error) => onFailureBids(error));
}, [newBid]);

function onSuccessBids(bidData: iBid[]) {
  setBids(bidData);
  const num = bidData.reduce((acc, shot) => acc = acc > shot.amount ? acc : shot.amount, 0);
    console.log("Max bid "+num);
  if(bidData.length === 0){
    setInitialBid(data.initial_price)
  } else {
    const maxBid = bidData.reduce((acc, shot) => acc = acc > shot.amount ? acc : shot.amount, 0);
    console.log("Max bid "+maxBid);
    setInitialBid(maxBid);
  }
}


function onFailureBids(error: string) {
  console.error(error);
}
  // Safeguard
  // if (data.length === 0) return <StatusEmpty />;
  if (data === null) return <StatusEmpty />;

  
  const bid: iBid = bids[bids.length-1];
  let amount: number= 0;
  if(bid?.amount) {
     amount = bid.amount; 
     console.log("Amount is "+amount+" from "+bid)
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
    alert("Bidding!");
  }

  function onFailure(error: string) {
    console.error(error);
    alert("Could not bid on item");
  }
 
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
          <button className="productBid" style={{ width: "40%" }}
          onClick={onClick}>
            Bid
          </button>
        </div>
      </section>
    </div>
  );
}
