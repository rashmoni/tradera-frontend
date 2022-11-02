import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import StatusEmpty from "../components/StatusEmpty";
import StatusError from "../components/StatusError";
import StatusLoading from "../components/StatusLoading";
import eStatus from "../interfaces/eStatus";
import iProduct from "../interfaces/iProduct";

export default function Landing() {
   // Local state
   const [status, setStatus] = useState(eStatus.LOADING);
   const [data, setData] = useState(new Array<iProduct>());
 
   // Properties
   const endPoint = "http://localhost:8000/products/"
/*
   // Methods
   useEffect(() => {
    setStatus(eStatus.LOADING);
    fetch(endPoint)
    .then((response) => response.json())
    .then((json) => onSuccess(json))
    .catch((error) => onFailure(error));
   }, []);

   function onSuccess(data: iProduct[]) {
    setData(data);
    setStatus(eStatus.READY);
  }

  function onFailure(error: string) {
    console.error(error);
    setStatus(eStatus.ERROR);
  }

  // Safeguards
  if (status === eStatus.LOADING) return <StatusLoading />;
  if (status === eStatus.ERROR) return <StatusError />;
  if (data.length === 0) return <StatusEmpty />;

  */
 
  return(
    <div id="landing">
        Landing page
        <Banner />
    </div>
  );
}
