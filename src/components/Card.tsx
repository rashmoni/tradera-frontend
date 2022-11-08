// Project files
import Placeholder from "../assets/images/placeholder.jpg";
import { useNavigate } from "react-router-dom";
import iAuctionItem from "../interfaces/iAuctionItem";



interface iProps {
  item: iAuctionItem;
}

export default function Card({ item }: iProps) {
let navigate = useNavigate();

  return (
    <article onClick={() => {
      const path: string = "/auction/".concat(item.id.toString());
      navigate(path);
    } } className="item-card">
      <img
        src={item.item_image_url ?? ""}
        onError={(event) => (event.currentTarget.src = Placeholder)}
      />
      <p>{item.item_name}</p>
    </article>
  );
}