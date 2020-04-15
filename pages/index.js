import { Heading, Box, Flex, Text } from "@chakra-ui/core";

const Home = () => (
  <Flex
    h="100vh"
    justifyContent="center"
    alignItems="center"
    direction="column"
    bg="tertiary"
  >
    <Box>
      <Heading color="primary">🦉 crooked owl</Heading>
      <Text color="secondary">coming soon to trees near you</Text>
    </Box>
  </Flex>
);

export default Home;
