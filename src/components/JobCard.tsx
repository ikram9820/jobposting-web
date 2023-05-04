import { Card, CardBody, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Job from "../entities/Job";

interface Props {
  job: Job;
}

const JobCard = ({ job }: Props) => {
  return (
    <Card>
      <CardBody>
        <Heading fontSize="2xl">
          <Link to={"/jobs/" + job._id}>{job.title}</Link>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default JobCard;
