import { Heading, HStack } from "@chakra-ui/layout"
import { Box,Button,Textarea } from "@chakra-ui/react"
import TextareaAutosize from "react-textarea-autosize"
import {useForm} from "react-hook-form";

function Dashboard() {
 
  const {register,handleSubmit,reset} = useForm();

  function handlePost(data){
    console.log(data);
    reset();
  }

  return (
    <Box maxW="600px" mx="auto" py="10">
     <form onSubmit={handleSubmit(handlePost)}>
      
      <HStack justify="space-between">
        <Heading size="lg">New Post</Heading>
        <Button colorScheme="teal" type="submit">Post</Button>
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