import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import Bidder from "../entities/Bidder";

const apiClient = new APIClient<Bidder>("/bidders");

const useBidders = () => {
  return useInfiniteQuery<Bidder, Error>({
    queryKey: ["bidders"],
    queryFn: () => apiClient.getAll(),

    staleTime: ms("24h"),
  });
};

export default useBidders;
