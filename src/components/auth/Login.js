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
import { useForm } from 'react-hook-form';
import { emailValidate,passwordValidate } from '../util/form-validate';
import { DASHBOARD } from '../../lib/routes';

function Login() {

  const {login, isLoading} = useLogin();
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  console.log(errors)
  
  async function handleLoginIn(data){
   const succeeded = await login({
    email: data.email, 
    password: data.password,
    redirectTo: DASHBOARD,
  })

  if(succeeded) reset();
 
}

  return (
    <Center w="100%" h="100vh">
      <Box mx="1" maxW="md" p="9" borderWidth="1px" borderRadius="lg">
      <Heading mb="4" size="lg" textAlign="center">Log In</Heading>

      <form onSubmit={handleSubmit(handleLoginIn)}>

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