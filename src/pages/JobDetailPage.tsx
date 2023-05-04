import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import JobAttributes from "../components/JobAttributes";
import useJob from "../hooks/useJob";

const JobDetailPage = () => {
  const { id } = useParams();
  const { data: job, isLoading, error } = useJob(id!);

  if (isLoading) return <Spinner />;

  if (error || !job) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{job.title}</Heading>
        <ExpandableText>{job.description}</ExpandableText>
        <JobAttributes job={job} />
      </GridItem>
    </SimpleGrid>
  );
};

export default JobDetailPage;
