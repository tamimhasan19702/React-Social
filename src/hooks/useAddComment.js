import { useState } from "react"
import { useToast } from "@chakra-ui/react";
import {uuidv4} from "@firebase/util";
import {doc,setDoc} from "firebase/firestore";
import { db } from "../lib/firebase";

export default function useAddComment({postId, uid}) {
  
  const [isLoading,setLoading] = useState(false);
  const toast =useToast();

  async function addComment(text){
    setLoading(true)
    const id = uuidv4();
    const date = Date.now();
    const docRef = doc(db,"comments",id)
    await setDoc(docRef,{text,id,postId,date,uid})

    toast({
        title: "Successfully added comment",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 3000
    });

   setLoading(false);
}
  
    return {addComment,isLoading}
}
