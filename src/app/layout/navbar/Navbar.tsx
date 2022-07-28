import { Flex, Box, Center, Heading, Text, Button } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex w="100vw" alignItems="center" gap="2" px="3rem" py="1.5rem">
      <Center>
        <Heading size="sm">Reactivities</Heading>
      </Center>
      <Center cursor="pointer">
        <Text>Activities</Text>
      </Center>
      <Button colorScheme="teal" size="sm">
        Create Activity
      </Button>
    </Flex>
  );
};

export default Navbar;
