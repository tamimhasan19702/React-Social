import { query,collection,orderBy,where } from "firebase/firestore";
import {db} from "../lib/firebase";
import { useCollectionData, } from 'react-firebase-hooks/firestore';

export default function usePosts(uid = null) {

    const q =uid ? query(
        collection(db,"posts"), 
        orderBy('date',"desc"),
        where("uid","==",uid)) 
        : query(
            collection(db,"posts"), 
            orderBy('date',"desc"));

    const [posts,isLoading,error] = useCollectionData(q)
    if(error) throw error;

    return {posts,isLoading}
}
