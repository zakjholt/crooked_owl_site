import { Heading, Box, Flex, Text } from "@chakra-ui/core";
import Div100vh from "react-div-100vh";

const Home = () => (
  <Div100vh>
    <Flex
      h="100%"
      justifyContent="center"
      alignItems="center"
      direction="column"
      bg="tertiary"
    >
      <Box>
        <Heading color="primary">🦉 crooked owl</Heading>
        <Text color="secondary">coming soon to towns near you</Text>
      </Box>
    </Flex>
  </Div100vh>
);

export default Home;
