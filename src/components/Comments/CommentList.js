import { Box } from "@chakra-ui/react";
import useCommentsList from "../../hooks/useCommentsList";
import SingleComment from "./SingleComment";

export default function CommentList({ post }) {
  const { id } = post;
  const { comments, isLoading } = useCommentsList(id);

  if (isLoading) return "Loading...";

  return <Box>
    <SingleComment />
    {comments.map((comment) => <h1>{comment}</h1>)}
  </Box>;
}
