import Bid from "./Bid";

export default interface Job {
  _id: number;
  title: string;
  description: string;
  requirements: string[];
  bids: Bid[];
  date: Date;
}
