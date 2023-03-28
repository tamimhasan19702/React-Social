import { Heading, HStack } from "@chakra-ui/layout"
import { Box,Button,Textarea } from "@chakra-ui/react"
import TextareaAutosize from "react-textarea-autosize"
import {useForm} from "react-hook-form";
import useAddPost from "../../hooks/useAddPost";
import { useAuth } from '../../hooks/useAuth';

function Dashboard() {
 
  const {register,handleSubmit,reset} = useForm();
  const {addPost,isLoading: addingPost} = useAddPost();
  const {user, isLoading: authLoading} = useAuth();

  function handleAddPost(data){
    addPost({
      uid: user.id,
      text: data.text,
    })
    reset();
  }

  return (
    <Box maxW="600px" mx="auto" py="10">
     <form onSubmit={handleSubmit(handleAddPost)}>
      
      <HStack justify="space-between">
        <Heading size="lg">New Post</Heading>
        <Button 
        colorScheme="teal" 
        type="submit" 
        isLoading={authLoading || addingPost }
        loadingText="Loading"
        >Post</Button>
      </HStack>
     <Textarea 
     as={TextareaAutosize} 
     resize="none" 
     mt="5" 
     placeholder="Write something new... "
     minRows={3}
     {...register("text", {required: true })}
     />

     </form>
    </Box>
  )
}

export default Dashboard