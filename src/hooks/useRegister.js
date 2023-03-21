import { DASHBOARD } from "../lib/routes";
import {useState} from "react";
import { useToast } from "@chakra-ui/react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { setDoc,doc} from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { useNavigate } from "react-router-dom";
import { isUsernameExists } from "../util/isUsernameExists";

//useRegister hook
export function useRegister(){
    const [isLoading,setLoading] = useState(false);
    const toast = useToast();
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
     
    async function register({ username, email, password, redirectTo=DASHBOARD}){
     setLoading(true);

     const usernameExists = await isUsernameExists(username);

     if(usernameExists){
        
        toast({
            title:"Username already exists",
            status: "error",
            isClosable: true,
            position: "top",
            duration: 3000,
        });
        setLoading(false);

     } else {

         try{
         const response = await createUserWithEmailAndPassword(email,password);

         await setDoc(doc(db, "users", response.user.uid), {
            id: response.user.uid,
            username: username.toLowerCase(),
            avatar: "",
            date: Date.now(),
         });
 
         toast({
            title: "Successfully created account",
            status: "success",
            isClosable: true,
            position: "top",
            duration: 3000,
        })

        navigate(redirectTo)

        } catch(error){
            toast({
                title: "Failed to create new account",
                status: "error",
                isClosable: true,
                position: "top",
                duration: 3000,
            });
        } finally{
            setLoading(false)
        }
     }

    }

    return {register, isLoading}
}