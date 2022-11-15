import React from 'react'
import { useEffect, useState } from "react";
import iBid from "../interfaces/iBid";
import SingleProductPageService from "../services/SingleProductPageService";

export const Bid = () => {
const [bids, setBids] = useState(new Array<iBid>());

    useEffect(() => {
        SingleProductPageService.getBidByItemId()
          .then((json) => onSuccessBids(json))
          .catch((error) => onFailureBids(error));
      }, []);
    
      function onSuccessBids(data: iBid[]) {
        setBids(data);
        console.log(data);
      }
    
      function onFailureBids(error: string) {
        console.error(error);
      }
  return (
    <div>Bid</div>
  )
}
