import { Button, Divider, Flex, HStack, Stack,Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Avatar from "./Avatar";
import { useParams } from "react-router-dom";
import PostList from "../posts/PostList";
import usePosts from "../../hooks/usePosts";
import useUsers from "../../hooks/useUsers";
import {format} from "date-fns";
import EditProfile from "./EditProfile";


export default function Profile() {
   const {id} = useParams();
   const {posts,isLoading:postLoading} = usePosts(id);
   const {user,isLoading:userLoading} = useUsers(id);
   const {isOpen,onOpen,onClose} = useDisclosure()

   if(userLoading) return "Loading...";

    return (
        <Stack spacing="5">
          <Flex p={["4","6"]} pos="relative" align="center"> 

          <Avatar user={user} size="2xl"/>
          <Button 
          pos="absolute" 
          mb="2" top="6" 
          right="6" 
          colorScheme="teal"
          onClick={onOpen}>
            Change avatar
            </Button>
          <Stack ml="10">
           
           @<Text fontSize="2xl" fontWeight="bold">{user.username}</Text>
           <HStack spacing="10">
            <Text color="gray.700" fontSize={["sm","lg"]}>
            Posts: {posts.length}
            </Text>
            <Text color="gray.700" fontSize={["sm","lg"]}>
            Likes: todo!
            </Text>
            <Text color="gray.700" fontSize={["sm","lg"]}>
            joined: {format(user.date,"MMM YYY")}
            </Text>
           </HStack>
          
          </Stack>
          <EditProfile isOpen={isOpen}/>
          </Flex>
          <Divider />

         {
            postLoading ? (
            <Text>Posts are loading...</Text>
            ): (
            <PostList posts={posts}/>
            )
         }

        </Stack>
    );
}
