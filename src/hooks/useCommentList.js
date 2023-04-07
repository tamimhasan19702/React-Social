import { query,collection,where} from "firebase/firestore"
import { db } from "../lib/firebase"
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function useCommentList(postId) {
   const q = query(collection(db,"comments"),where("postId"), "==", postId);

   const [comments,isLoading,error] = useCollectionData(q)
  
   if(error) throw error;

    return {comments,isLoading}
}
