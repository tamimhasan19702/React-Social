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
import { useForm } from 'react-hook-form';
import { emailValidate,passwordValidate, usernameValidate } from '../../util/form-validate';
import { DASHBOARD } from '../../lib/routes';
import { useRegister } from '../../hooks/useRegister';
import { LOGIN } from '../../lib/routes';


function Register() {
 
  const {register:signup, isLoading} = useRegister()

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
      
   //test commit
  async function handleRegister(data){
   signup({
    username: data.username,
    email: data.email, 
    password: data.password,
    redirectTo: DASHBOARD,
  });
}

  return (
    <Center w="100%" h="100vh">

      <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
      <Heading mb="4" size="lg" textAlign="center">Register</Heading>

      <form onSubmit={handleSubmit(handleRegister)}>

        <FormControl isInvalid={errors.username} py="2">
         <FormLabel>Username</FormLabel>
         <Input  
         placeholder='username' 
         {...register("username", usernameValidate)}/>
         <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.email} py="2">
         <FormLabel>Email</FormLabel>
         <Input 
         type="email" 
         placeholder='user@gmail.com' 
         {...register("email", emailValidate)}/>
         <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
        </FormControl>
        
        <FormControl isInvalid={errors.password} py="2">
         <FormLabel>Password</FormLabel>
         <Input 
         type="password" 
         placeholder='password' 
         {...register("password", passwordValidate)}/>
         <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
        </FormControl>
        
        <Button 
        mt={4} 
        colorScheme="teal" 
        type='submit' 
        w="full" 
        size="lg" 
        isLoading={isLoading}
        loadingText="Signing up">
          Register
        </Button>
      </form>

      <Text fontSize="xlg" align="center" mt="6">
        Already have an account?{" "}
      <Link 
      as={RouterLink}
      to={LOGIN}
      color="teal.800"
      fontWeight="medium"
      textDecor="nounderline"
      _hover={{background: 'teal.100'}}
      >Login</Link>{" "}
      instead!
      </Text>
      
      
      </Box>
    </Center>
  )
}

export default Register