
import { query,collection,where,orderBy} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../lib/firebase";

export default function useCommentsList(postId) {
  
  
    const q = query(collection(db,"comments"), where("postId","==",postId),orderBy("date","asc"));
    const [comments,isLoading,error] = useCollectionData(q);

    if(error) throw error;

    return {comments,isLoading}

}
