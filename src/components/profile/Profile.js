import { Divider, Flex, HStack, Stack,Text } from "@chakra-ui/react";
import React from "react";
import Avatar from "./Avatar";
import { useParams } from "react-router-dom";
import PostList from "../posts/PostList";
import usePosts from "../../hooks/usePosts";

export default function Profile() {
   const {id} = useParams();
   const {posts,isLoading:postLoading} = usePosts(id);
  

    return (
        <Stack spacing="5">
          <Flex p={["4","6"]} pos="relative" align="center"> 
          <Avatar />
          <Stack ml="10">
           @username here
           
           <HStack spacing="10">
            <Text color="gray.700" fontSize={["sm","lg"]}>
            Posts: 10
            </Text>
            <Text color="gray.700" fontSize={["sm","lg"]}>
            Likes: todo!
            </Text>
            <Text color="gray.700" fontSize={["sm","lg"]}>
            joined: jan 01 2022
            </Text>
           </HStack>
          
          </Stack>
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
