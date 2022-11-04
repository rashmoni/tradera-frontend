/* eslint-disable jsx-a11y/alt-text */
import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import SingleProductImage from "../assets/images/product.png";

export default function SingleProduct() {
  // This code in the pageURL could be the product id
  const { code } = useParams();

  return (
    <div id="singleProduct">
      <NavigationBar />
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
            Product Title</h1>
            <p>Asking price</p>
            <h1>SEK 300</h1>
            <p>Heighest bid: 350 sek</p>
            <p>Time remaining: 11min 13 sec</p>
            <p>Ends Nov 2 09:34</p>
            <button
            style={{width:"40%"}}
            >Bid</button>
            </div>
        </section>
      </div>
      <section
      className="productDescription"
      >Description goes here</section>
    </div>
  );
}
