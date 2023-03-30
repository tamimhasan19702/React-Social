import {useState} from 'react'
import {setDoc,doc} from  "firebase/firestore";
import {db} from "../lib/firebase";
import {uuidv4} from '@firebase/util';
import { useToast } from '@chakra-ui/react';

export default function useAddPost() {
    const [isLoading,setLoading] = useState(false)
    const toast = useToast();

    async function addPost(post){
     setLoading(true);
     const id = uuidv4()
     await setDoc(doc(db,"posts",id), { 
     ...post,
     id,
     date: Date.now(),
     likes: [],
     });
     setLoading(false);
     toast({
        title: "post added successfully",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 3000,
    });
    }

    return {
        addPost,
        isLoading
    };
}
