import { SimpleGrid, Text } from "@chakra-ui/react";
import useJobs from "../hooks/useJobs";
import JobCard from "./JobCard";
import CardContainer from "./CardContainer";
import CardSkeleton from "./CardSkeleton";

const JobList = () => {
  const { data, error, isLoading } = useJobs();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} spacing={6} padding="10px">
      {isLoading &&
        skeletons.map((skeleton) => (
          <CardContainer key={skeleton}>
            <CardSkeleton />
          </CardContainer>
        ))}
      {data?.pages.map((job) => (
        <CardContainer key={job._id}>
          <JobCard job={job} />
        </CardContainer>
      ))}
    </SimpleGrid>
  );
};

export default JobList;
