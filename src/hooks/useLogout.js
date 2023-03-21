//useLogout hooks
import { useSignOut } from 'react-firebase-hooks/auth';
import Login from '../components/auth/Login';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { auth } from '../lib/firebase';


export function useLogout(){
    const [signOut, isLoading, error] = useSignOut(auth);
    const navigate = useNavigate();
    const toast = useToast();

    async function logout(){
     if(await signOut()){
        toast({
            title: "Successfully Logged Out",
            status: "success",
            isClosable: true,
            position: "top",
            duration: 3000,
        })
        navigate(Login)
     }else{
        toast({
            title: "Error Logging Out",
            status: "error",
            isClosable: true,
            position: "top",
            duration: 3000,
        })
     }
   
    }

    return {logout, isLoading}
}