import { SimpleGrid, Text } from "@chakra-ui/react";
import Job from "../entities/Job";
import DefinitionItem from "./DefinitionItem";

interface Props {
  job: Job;
}

const JobAttributes = ({ job: job }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Requirements">
        {job.requirements.map((requirement) => (
          <Text key={requirement}>{requirement}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {job.bids?.map((bid) => (
          <Text key={bid.bidder._id}>
            {bid.bidder.user.name} bid {bid.amount}
          </Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default JobAttributes;
