import { useParams } from "react-router-dom";

export default function SingleProduct() {
    // This code in the pageURL could be the product id
    const { code } = useParams();

  return (
  <div id="singleProduct">
    Single Product Page
    </div>
  );
}
