import iAuctionItem from "../interfaces/iAuctionItem";
import StatusEmpty from "./StatusEmpty";
import SingleProductImage from "../assets/images/product.png";

interface iProps {
  data: any;
}

export default function SingleProductCard({ data }: iProps) {


  // Components

  // Safeguard
  if (data.length === 0) return <StatusEmpty />;

  return (
    <div className="singleProductContainer">
        <section className="imageContainer">
          <img src={SingleProductImage} 
          style={{objectFit:"contain"}}/>
          <span
          style={{display:"block"}}
          >
          </span>
          
        </section>
        <section className="productDetailContainer">
          <div>
          <h1 
          style={{marginTop: "10px"}}>
            {data.item_name}</h1>
            <p>Asking price</p>
            <h1>SEK {data.initial_price}</h1>
            <p>Heighest bid: 350 sek</p>
            <h2>Description:</h2>
            <p>{data.description}</p>
            <p>Ends : {data.stop_date}</p>
            <button
            className="productBid"
            style={{width:"40%"}}
            >Bid</button>
            </div>
        </section>
      </div>
  );
}
