import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { DASHBOARD } from '../lib/routes';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

// useAuth hooks 
export function useAuth(){

    const [authUser, authLoading, error] = useAuthState(auth);

    return {user: authUser, authLoading, error};
}



// useLogin hooks
export function useLogin(){
    const [isLoading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    async function login({email, password, redirectTo=DASHBOARD}){
    setLoading(true);
    
    try{
  
        await signInWithEmailAndPassword(auth, email, password);
        toast({
            title: "You are logged in",
            status: "success",
            isClosable: true,
            position: "top",
            duration: 5000,
        });
        navigate(redirectTo);

    }catch(error){
        toast({
        title: "Logging in failed",
        description: error.message,
        status: "error",
        isClosable: true,
        position: "top",
        duration: 5000,
    });
    setLoading(false);
    return false;  //return false if loggin in failed
    }
    setLoading(false);
    return true; //return true is logging in succeeded
    }

    return {login, isLoading}
}