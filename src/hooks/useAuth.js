//analyze all the code below of this comment
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';
import { useEffect, useState } from 'react';
import { doc, getDoc} from "firebase/firestore";
import { db } from '../lib/firebase';

// useAuth hooks 
export function useAuth(){

    const [authUser, authLoading, error] = useAuthState(auth);
    const [isLoading, setLoading] = useState(true);
    const [user,setUser] = useState(null);

    useEffect(() => {

    async function fetchData(){
        setLoading(true)
        const ref = doc(db, "users",authUser.uid);
        const docSnap = await getDoc(ref);
        setUser(docSnap.data());
        setLoading(false)
    }

    if(!authLoading){
        if(authUser) {
        fetchData();
        }else {
            setLoading(false) //not signed in
        } 
    }

    },[authLoading,authUser])

    return {user, isLoading, error};
}

//why .env.local used??