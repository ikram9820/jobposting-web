import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Bidder from "../entities/Bidder";

const apiClient = new APIClient<Bidder>("/bidders");

const useBidder = (id: string) =>
  useQuery({
    queryKey: ["bidders", id],
    queryFn: () => apiClient.get(id),
  });

export default useBidder;
