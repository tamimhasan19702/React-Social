import { query,collection,orderBy } from "firebase/firestore";
import {db} from "../lib/firebase";
import { useCollectionData, } from 'react-firebase-hooks/firestore';

export default function usePosts() {

    const q = query(collection(db,"posts"), orderBy('date',"desc"))
    const [posts,isLoading,error] = useCollectionData(q)
    if(error) throw error;

    return {posts,isLoading}
}
