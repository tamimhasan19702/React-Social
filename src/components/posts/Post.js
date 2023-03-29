import { Box,Text} from "@chakra-ui/react";
import React from "react";

function Post({post}) {
  return (
    <Box p="2" maxW="600px">
      <Box border="2px solid" borderColor="gray.100" borderRadius="md">
      <Header />

      <Box p="2" minH="100px">
         <Text wordBreak="break-word" fontSize={["sm","md"]}>
         This is a Post
         </Text>
      </Box>

      <Actions />
      </Box>
    </Box>
  )
}

export default Post;
