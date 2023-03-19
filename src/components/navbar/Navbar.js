import { Flex } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex
    shadow="sm"
    pos="fixed"
    width="full"
    borderTop="6px solid"
    borderTopColor="teal.400"
    height="16"
    zIndex="3"
    justify="center"
    >
    <Flex px="4" w="full" align="center" maxW="1200px"></Flex>
    </Flex>
  );
}

export default Navbar;
