import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import {useState} from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { DASHBOARD } from '../lib/routes';

// useAuth hooks 
export function useAuth(){

    const [authUser, isLoading, error] = useAuthState(auth);

    return {user: authUser, isLoading, error};
}

// useLogin hooks
export function useLogin(){
    const {isLoading, setLoading} = useState(false);

    async function login({email, password, redirectTo=DASHBOARD}){
    setLoading(true);
    
    try{
        await signInWithEmailAndPassword(auth, email, password)
    }catch(error){
    console.log(error)
    }

    setLoading(false);
    }

    return {login, isLoading}
}