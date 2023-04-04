import useCommentsList from "../../hooks/useCommentsList";


export default function CommentList({post}) {

  const {id} = post;
  const {comments,isLoading} = useCommentsList(id);

  if(isLoading) return 'Loading...'

  return comments.map((comment) => comment.text )
}
