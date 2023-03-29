import { Box,Text } from "@chakra-ui/react";
import React from "react";
import Post from "./Post";

export default function PostList({posts}) {
  return (
    <Box px="4">
     {posts?.length===0 ? 
     <Text textAlign="center" fontSize="xl">No Post Yet...</Text> : 
     posts?.map(post => <Post key={post.id} post={post} />)}
    </Box>
  );
}
