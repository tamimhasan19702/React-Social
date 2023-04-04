import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useAuth } from "../../hooks/useAuth";
import Avatar from "../profile/Avatar";
import {useForm} from 'react-hook-form';
import useComments from "../../hooks/useComments";

export default function NewComment({post}) {


  return (
   <Box maxW="600px" mx="auto" py="6">
    
    <Flex padding="4">
      <Avatar user={user} size="sm"/>
     <Box flex="1" ml="4">
        <form onSubmit={handleSubmit(handleAddComment)}>
          <Box>
            <Input 
            size="sm"
            variant="flushed"
            placeholder="write Comment..."
            autoComplete="off"
            {...register('text',{required: true})}
            />
          </Box>
          
          <Flex pt="2">
           <Button
        isLoading={commentLoading || authLoading}
        type="submit"
        colorScheme="teal"
        ml="auto"
        >
            Add Comment
           </Button>
          </Flex>
        </form>

     </Box>
    </Flex>
   </Box>
  );
}
