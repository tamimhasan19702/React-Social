import React from 'react'
import { Center,
         Box,
         Heading,
         FormControl,
         FormLabel,
         FormErrorMessage,
         Input,
         Button,
         Link ,
         Text
      } from '@chakra-ui/react';
import { Link as RouterLink} from 'react-router-dom'; 
import Register from './Register';        
import { useLogin } from '../../hooks/auth';


function Login() {

  const {login, isLoading} = useLogin

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

      <Text fontSize="xlg" align="center" mt="6">
        Don't have an account?{" "}
      <Link 
      as={RouterLink}
      to={Register}
      color="teal.800"
      fontWeight="medium"
      textDecor="nounderline"
      _hover={{background: 'teal.100'}}
      >Register</Link>{" "}
      instead!
      </Text>
      

      </Box>
    </Center>
  )
}

export default Login