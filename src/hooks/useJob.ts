import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Job from "../entities/Job";

const apiClient = new APIClient<Job>("/jobs");

const useJob = (id: string) =>
  useQuery({
    queryKey: ["jobs", id],
    queryFn: () => apiClient.get(id),
  });

export default useJob;
