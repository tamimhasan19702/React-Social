import { Box,Text} from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import Action from "./Action";

function Post({post}) {

  const {uid,text,date} = post;

  return (
    <Box p="2" maxW="600px" textAlign="left">
      <Box border="2px solid" borderColor="gray.100" borderRadius="md">
      <Header uid={uid} date={date}/>

      <Box p="2" minH="100px">
         <Text wordBreak="break-word" fontSize={["sm","md"]}>
         {text}
         </Text>
      </Box>

      <Action />
      
      </Box>
    </Box>
  )
}

export default Post;
