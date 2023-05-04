import Invitation from "./Invitation";
import User from "./User";

interface Bidder {
  _id: string;
  user: User;
  skills: string[];
  preferences: string[];
  invitations: Invitation[];
}
export default Bidder;
