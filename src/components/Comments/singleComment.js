import { Box, Flex,Text } from "@chakra-ui/react";

export default function SingleComment(comment) {
  return (
    <Box px="4" py="2" maxW="600px" mx="auto" textAlign="left">
     <Flex pb="2">
        user avatar here
        <Box flex="1" ml="4">
         
         <Flex borderBottom="1px solid" borderColor="teal.100" pb="2">
         <Box>
            @testUser
            <Text fontSize="xs" color="gray.500">
            20 minutes ago
            </Text>
         </Box>
         </Flex>

        <Box pt="2" fontSize="sm">
         <Text>{comment}</Text>
        </Box>

        </Box>
     </Flex>
    </Box>
  )
}
