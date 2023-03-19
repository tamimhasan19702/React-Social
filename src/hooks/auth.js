import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import {useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { DASHBOARD } from '../lib/routes';
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useSignOut } from 'react-firebase-hooks/auth';
import Login from '../components/auth/Login';

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


//useLogout hooks
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
            duration: 5000,
        })
        navigate(Login)
     }else{
        toast({
            title: "Error Logging Out",
            status: "error",
            isClosable: true,
            position: "top",
            duration: 5000,
        })
     }
   
    }

    return {logout, isLoading}
}