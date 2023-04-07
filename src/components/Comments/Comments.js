import { Box } from "@chakra-ui/react";
import Post from "../posts/Post";
import { useParams } from "react-router-dom";
import useSinglePost from "../../hooks/useSingelPost";
import NewComment from "./NewComment";

export default function Comments() {
  const { id } = useParams();
  const { post, isLoading } = useSinglePost(id);

  if (isLoading) return "Loading...";

  return (
    <Box align="center" pt="50">
      <Post post={post} />
      <NewComment post={post}/>
    </Box>
  );
}
