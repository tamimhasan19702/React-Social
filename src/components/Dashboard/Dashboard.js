import { Heading, HStack } from "@chakra-ui/layout"
import { Box,Button } from "@chakra-ui/react"

function Dashboard() {
  return (
    <Box maxW="600px" mx="auto" py="10">
     <form>
      <HStack justify="space-between">
        <Heading size="lg">New Post</Heading>
        <Button colorScheme="teal" type="submit">Post</Button>
      </HStack>
     </form>
    </Box>
  )
}

export default Dashboard