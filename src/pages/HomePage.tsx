import { Box, Grid, Show, GridItem, Flex } from "@chakra-ui/react";
import JobList from "../components/JobList";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: ` "main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr",
      }}
    >
      <GridItem area="main">
        <JobList />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
