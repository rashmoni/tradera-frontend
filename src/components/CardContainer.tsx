import iAuctionItem from "../interfaces/iAuctionItem";
import Card from "./Card";
import StatusEmpty from "./StatusEmpty";


interface iProps {
  data: iAuctionItem[];
}

export default function CardContainer({ data }: iProps) {


  // Components
  const Cards = data.map((item) => <Card key={item.id} item={item} />);

  // Safeguard
  if (data.length === 0) return <StatusEmpty />;

  return (
    <section >
      <div className="card-list">{Cards}</div>
    </section>
  );
}
