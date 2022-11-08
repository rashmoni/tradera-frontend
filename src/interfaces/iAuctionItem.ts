export default interface iAuctionItem {
    id: number;
    owner_id: number;
    item_name: string;
    description: string;
    initial_price: number;
    start_date: any; // which data type for dates?
    stop_date: any;  
    item_image_url: string;
}