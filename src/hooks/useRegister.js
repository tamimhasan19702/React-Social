import { DASHBOARD } from "../lib/routes";
import {useState} from "react";
import { useToast } from "@chakra-ui/react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { setDoc,doc} from "firebase/firestore";
import { auth, db } from "../lib/firebase";

//useRegister hook
export function useRegister(){
    const [isLoading,setLoading] = useState(false);
    const toast = useToast();
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)
     
    async function register({ username, email, password, redirectTo=DASHBOARD}){
     setLoading(true);

     const usernameExists = await isUsernameExists(username);

     if(usernameExists){
        
        toast({
            title:"Username already exists",
            status: "error",
            isClosable: true,
            position: "top",
            duration: 5000,
        });
        setLoading(false);

     } else {

         try{
         const response = await createUserWithEmailAndPassword(email,password);

         await setDoc(doc(db, "users", response.user.uid()))


         }catch(error){
    
         }

     }

     setLoading(false)

    }

    return {register, isLoading}
}