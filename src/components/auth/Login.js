import React from 'react'
import { Center,
         Box,
         Heading,
         FormControl,
         FormLabel,
         FormErrorMessage,
         Input,
         Button } from '@chakra-ui/react'

function Login() {
  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
      <Heading mb="4" size="lg" textAlign="center">Log In</Heading>

      <form onSubmit={()=> {}}>

        <FormControl isInvalid={false} py="2">
         <FormLabel>Email</FormLabel>
         <Input type="email" placeholder='user@gmail.com'/>
         <FormErrorMessage>Wrong Email Address</FormErrorMessage>
        </FormControl>
        
        <FormControl isInvalid={false} py="2">
         <FormLabel>Password</FormLabel>
         <Input type="Password" placeholder='Password'/>
         <FormErrorMessage>Wrong Password</FormErrorMessage>
        </FormControl>
        
        <Button 
        mt={4} 
        colorScheme="teal" 
        type='submit' 
        w="full" 
        size="lg" 
        isLoading={false}
        loadingText="Logging In">
          Log in
        </Button>
      </form>
      </Box>
    </Center>
  )
}

export default Login