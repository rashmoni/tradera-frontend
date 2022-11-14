/* eslint-disable jsx-a11y/alt-text */
import StatusEmpty from "./StatusEmpty";
import SingleProductImage from "../assets/images/product.png";
import iAuctionItem from "../interfaces/iAuctionItem";
import Placeholder from "../assets/images/placeholder.jpg";
import iBid from "../interfaces/iBid";
import SingleProductPageService from "../services/SingleProductPageService";

interface iProps {
  data: iAuctionItem;
  bids: iBid[]
}


export default function SingleProductCard({ data, bids }: iProps) {
  // Components

  // Safeguard
  // if (data.length === 0) return <StatusEmpty />;
  if (data === null) return <StatusEmpty />;

  
  const bid: iBid = bids[bids.length-1];
  let amount: number= 0;
  if(bid?.amount) {
     amount = bid.amount; 
  }

  async function onClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    SingleProductPageService.createNewBid(5)
      .then(onSuccess)
      .catch((error) => onFailure(error));
  }

  function onSuccess() {
    alert("Item created!");
  }

  function onFailure(error: string) {
    console.error(error);
    alert("Could not create item");
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
          <p>Heighest bid: {amount}</p>
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
