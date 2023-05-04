interface Invitation {
  job: string;
  status: "Invited" | "Accepted" | "Rejected";
  date: Date;
}

export default Invitation;
