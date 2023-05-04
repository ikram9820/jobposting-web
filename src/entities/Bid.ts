import Bidder from "./Bidder";

interface Bid {
  bidder: Bidder;
  amount: number;
  date: Date;
}
export default Bid;
