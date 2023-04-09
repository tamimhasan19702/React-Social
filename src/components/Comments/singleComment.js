
import { Box,Flex,Text } from "@chakra-ui/react";
import React from "react";
import Avatar from "../profile/Avatar";
import useUsers from "../../hooks/useUsers";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function SingleComment({comment}) {
  const {text,uid,date} = comment;
  const {user,isLoading} = useUsers(uid)

  if (isLoading) return "Loading..."

  return (
     <Box px="2" maxW="600px" mx="auto" textAlign="left">
       <Flex pb="2">
       <Avatar user={user} size="sm"/>
       <Box flex="1" ml="4">
         <Flex borderBottom="1px solid" borderColor="teal.100" pb="2">
          <Box>
            @{user.username}
            <Text fontSize="xs" color="gray.500">
             {formatDistanceToNow(date)}
            </Text>
          </Box>
         </Flex>
         <Box pt="2" fontSize="sm">
          <Text>{text}</Text>
         </Box>
       </Box>
       </Flex>
     </Box>
  );

}
