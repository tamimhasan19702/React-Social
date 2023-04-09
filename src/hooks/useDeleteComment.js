import {useState} from "react";
import  {doc,deleteDoc} from 'firebase/firestore';
import { db } from "../lib/firebase";
import { useToast } from "@chakra-ui/react";

export default function useDeleteComment(id) {
    const [isLoading,setLoading] = useState(false);
    const toast = useToast();

    async function deleteComment(){

        const res = window.confirm("Are you sure you want to delete this comment?");

        if(res){
            setLoading(true)
            const docRef =  doc(db,"comments",id);
            await deleteDoc(docRef);
            toast({
                title: "Comment Deleted",
                status: "info",
                isClosable: true,
                position: "top",
                duration: 3000,
            });
            setLoading(false)
        }

    }

  return {deleteComment, isLoading};
}
