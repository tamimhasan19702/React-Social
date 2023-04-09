import {useState} from "react";
import  {doc,deleteDoc} from 'firebase/firestore';
import { db } from "../lib/firebase";
import { position, useToast } from "@chakra-ui/react";

export default function useDeleteComment(id) {
    const [isLoading,setLoading] = useState(false);
    const toast = useToast();

    async function deleteComment(){
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

  return {deleteComment, isLoading};
}
