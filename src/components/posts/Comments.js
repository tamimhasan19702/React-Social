import { Box } from "@chakra-ui/react";
import Post from "./Post";
import {useParams} from 'react-router-dom';
import useSinglePost from "../../hooks/useSingelPost";

export default function Comments() {
  const {id} = useParams()
  const {post,isLoading} = useSinglePost(id)

  if(isLoading) return "Loading...";
  
  return (
    <Box align="center" pt="50">
      <Post post={post}/>
    </Box>
  );
}
