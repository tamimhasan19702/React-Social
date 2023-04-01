import { useDocumentData } from "react-firebase-hooks/firestore";
import {doc} from 'firebase/firestore'
import { db } from "../lib/firebase";


export default function useSinglePost(id) {
   
  const q = doc(db, "posts", id)  
  const [post,isLoading ] = useDocumentData(q);

  return {post,isLoading };
}
