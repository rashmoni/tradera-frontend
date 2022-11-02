export default interface iProduct {
    id: number;
    userId: number;
    title: string;
    description: string;
    initialPrice: number;
    endingTime: any;    // which data type for this?
    imageURL: string;
}