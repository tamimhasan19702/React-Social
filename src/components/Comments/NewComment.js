import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useAuth } from "../../hooks/useAuth";
import Avatar from "../profile/Avatar";

export default function NewComment() {

  const {user,isLoading} = useAuth();
  
  if(isLoading) return "Loading...";

  return (
   <Box maxW="600px" mx="auto" py="6">
    
    <Flex padding="4">
      <Avatar user={user}/>
     <Box flex="1" ml="4">
        <form onSubmit={() => {}}>
          <Box>
            <Input 
            size="sm"
            variant="flushed"
            placeholder="write Comment"
            autoComplete="off"/>
          </Box>
          
          <Flex pt="2">
           <Button
        //    isLoading={}
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
