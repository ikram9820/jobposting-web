import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/api-client";
import Job from "../entities/Job";

const apiClient = new APIClient<Job>("/jobs");

const useJobs = () => {
  return useInfiniteQuery<Job, Error>({
    queryKey: ["jobs"],
    queryFn: () => apiClient.getAll(),

    staleTime: ms("24h"),
  });
};

export default useJobs;
