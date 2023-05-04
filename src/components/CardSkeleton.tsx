import { Card, CardBody, SkeletonText } from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <Card>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default CardSkeleton;
