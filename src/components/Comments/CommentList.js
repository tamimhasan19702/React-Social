import { Box } from "@chakra-ui/react";
import useCommentList from "../../hooks/useCommentList";

export default function CommentList({post}) {
    const {id} = post;
    const {comments,isLoading} = useCommentList(id);
    
    if (isLoading) return "Loading..."
  
    return(
        <Box>
        {comments.map((comment) =><>{comment.text}</>)}
        </Box>
    );
}
