import {useState} from 'react';
import  {doc,deleteDoc} from 'firebase/firestore';
import { db } from "../lib/firebase";
import { useToast } from "@chakra-ui/react";

export default function useDeletePost(id) {
    const [isLoading,setLoading] = useState(false);
    const toast = useToast();
    

    async function deletePost(){
    
        const res = window.confirm("Are you sure you want to delete this post?");

        if(res){
            setLoading(true)
            const docRef =  doc(db,"posts",id);
            await deleteDoc(docRef);
            toast({
                title: "Post Deleted",
                status: "info",
                isClosable: true,
                position: "top",
                duration: 3000,
            });
            setLoading(false)
        }
    }
  
    return { deletePost, isLoading};
}
