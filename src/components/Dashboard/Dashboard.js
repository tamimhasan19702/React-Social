import { Heading, HStack } from "@chakra-ui/layout"
import { Box,Button,Textarea } from "@chakra-ui/react"
import TextareaAutosize from "react-textarea-autosize"

function Dashboard() {
  return (
    <Box maxW="600px" mx="auto" py="10">
     <form>
      
      <HStack justify="space-between">
        <Heading size="lg">New Post</Heading>
        <Button colorScheme="teal" type="submit">Post</Button>
      </HStack>
     <Textarea as={TextareaAutosize} resize="none" mt="5" placeholder="Write something new... "/>
     </form>
    </Box>
  )
}

export default Dashboard