import React from "react"

const PRODUCTS_END_POINT = "http://localhost:9000/auctions";
const BID_END_POINT = "http://localhost:9000/bids/";
const METHOD = "POST";
const HEADERS = { "Content-type": "application/json; charset=UTF-8" };

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
  
    createNewBid(item:any){
        return(
            fetch(BID_END_POINT+"create", {
            method: METHOD,
            headers: HEADERS,
            body: JSON.stringify(item),
          })
          )
    }
}

export default new SingleProductPageService()