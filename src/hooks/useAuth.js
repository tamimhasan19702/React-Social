import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';

// useAuth hooks 
export function useAuth(){

    const [authUser, authLoading, error] = useAuthState(auth);

    return {user: authUser, authLoading, error};
}




