import { query } from "firebase/firestore";
import {db} from "../lib/firebase";
import { useCollectionData,collection } from 'react-firebase-hooks/firestore';

export default function usePosts() {

    const q = query(collection(db,"posts"))
    const [posts,isLoading,error] = useCollectionData(q)
    if(error) throw error;
    return {posts,isLoading}
}
