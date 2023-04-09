import { Box } from "@chakra-ui/react";
import useCommentList from "../../hooks/useCommentList";
import SingleComment from "./SingleComment";

export default function CommentList({post}) {
    const {id} = post;
    const {comments,isLoading} = useCommentList(id);
    
    if (isLoading) return "Loading..."
  
    return(
        <Box>
        {
        comments.map((comment) =>(
        <SingleComment key={comment.id} comment={comment}/>
            ))
        }
        </Box>
    );
}
