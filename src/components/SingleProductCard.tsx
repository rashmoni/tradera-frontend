import StatusEmpty from "./StatusEmpty";
import SingleProductImage from "../assets/images/product.png";
import iAuctionItem from "../interfaces/iAuctionItem";
import Placeholder from "../assets/images/placeholder.jpg";
import iBid from "../interfaces/iBid";

interface iProps {
  data: iAuctionItem;
  bids: iBid[]
}

export default function SingleProductCard({ data, bids }: iProps) {
  // Components

  // Safeguard
  // if (data.length === 0) return <StatusEmpty />;
  if (data === null) return <StatusEmpty />;

  console.log(bids);
  const bid: iBid = bids[bids.length-1];
  console.log(bid);
  let amount: number= 0;
  if(bid?.amount) {
     amount = bid.amount;
     console.log(amount);
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
          <button className="productBid" style={{ width: "40%" }}>
            Bid
          </button>
        </div>
      </section>
    </div>
  );
}
