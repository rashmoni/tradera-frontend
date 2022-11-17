import React from 'react'
import iBid from '../interfaces/iBid';

class BiddingServices {
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

    getBidWinner(bidArray: iBid[], initialBid: number){
        let bidWinner: any = bidArray.find(bid => bid.amount === initialBid);
        for (const [key, value] of Object.entries(bidWinner)) {
          if(key === "traderId")
          {return value}
        }
    }
}

export default new BiddingServices()