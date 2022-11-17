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

    getBidByItemId(id:number){
        return (
            fetch(BID_END_POINT+id)
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

    fetchBiggestBid(dataArray:any){
        const maxBid = dataArray.reduce((result: number, current: { amount: number; }, index: number) =>
            result = result > current.amount ? result : current.amount, 0);
        return maxBid;
    }

    setBidPrice(dataArray: any, bidPrice: number){
        var maxBid = bidPrice;
        console.log("Bid array is "+dataArray)
        if(dataArray.length === 0){
            return maxBid;
          } else {
            maxBid = this.fetchBiggestBid(dataArray);
            console.log("Max bid "+maxBid);
            return maxBid;
          }
    }
}

export default new SingleProductPageService()