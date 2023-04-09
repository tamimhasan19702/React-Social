import {useState} from 'react';
import {setDoc,doc} from 'firebase/firestore';
import {uuidv4} from '@firebase/util';
import { db } from '../lib/firebase';
import { useToast } from '@chakra-ui/react';

export default function useAddComments({postId}) {
  const [isLoading,setLoading] = useState(false);
  const toast = useToast();

  async function addComment(text){
   setLoading(true);
   const id = uuidv4();
   const date = Date.now();
   const docRef = doc(db, "comments",id)
   
   await setDoc(docRef, {text, id,postId,date});

   toast({
    title: "successfully comment added in this post",
    status: "success",
    isClosable: true,
    position: "top",
    duration: 3000,
   });

   setLoading(false)
  }
  
  return {addComment,isLoading};
}
