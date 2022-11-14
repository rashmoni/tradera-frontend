import React from "react"

const PRODUCTS_END_POINT = "http://localhost:9000/auctions";
const BID_END_POINT = "http://localhost:9000/bids/";

class SingleProductPageService {

    getProductById(productId:any){
        return (
            fetch(PRODUCTS_END_POINT+"/"+productId+"/")
      .then((response) => response.json())
          )
    }

    getBidByItemId(){
        return (
            fetch(BID_END_POINT)
      .then((response) => response.json())
        )
    }
  
    createNewBid(){
        return (
            fetch(BID_END_POINT+"create")
      .then((response) => response.json())
        )
    }
}

export default new SingleProductPageService()