import { Box,Flex,IconButton,Text } from "@chakra-ui/react";
import React from "react";
import Avatar from "../profile/Avatar";
import useUsers from "../../hooks/useUsers";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import UserNameButton from "../profile/UserNameButton";
import { FaTrash } from "react-icons/fa";
import useDeleteComment from "../../hooks/useDeleteComment";
import { useAuth } from "../../hooks/useAuth";


export default function SingleComment({comment}) {

  const {text,uid,date,id} = comment;
  const {user,isLoading:userLoading} = useUsers(uid);
  const {deleteComment,isLoading:deleteLoading} = useDeleteComment(id)
  const {user:authUser,isLoading:authLoading} = useAuth();

  if (userLoading) return "Loading..."

  return (
     <Box px="2" maxW="600px" mx="auto" textAlign="left">
       <Flex pb="2">
       <Avatar user={user} size="sm"/>
       <Box flex="1" ml="4">
         <Flex borderBottom="1px solid" borderColor="teal.100" pb="2">
          <Box>
            <UserNameButton user={user}/> 
            <Text fontSize="xs" color="gray.500">
             {formatDistanceToNow(date)}
            </Text>
          </Box>

   {!authLoading && authUser.id === uid && (


          <IconButton 
          size="md" 
          ml="auto" 
          icon={<FaTrash/>} 
          colorScheme="red"
          variant="ghost"
          isRound
          onClick={deleteComment}
          isLoading={deleteLoading}
          />
)      
}

         </Flex>
         <Box pt="2" fontSize="sm">
          <Text>{text}</Text>
         </Box>
       </Box>
       </Flex>
     </Box>
  );
}
