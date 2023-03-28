import {useState} from 'react'
import {setDoc,doc} from  "firebase/firestore";
import {db} from "../lib/firebase";
import {uuidv4} from '@firebase/util'

export default function useAddPost() {
    const [isLoading,setLoading] = useState(false)
 
    async function addPost(post){
     setLoading(true);
     const id = uuidv4()
     await setDoc(doc(db,"posts",id), { 
     ...post,
     id,
     date: Date.now(),
     likes: [],
     });
    }

    return {
        addPost,
        isLoading
    };
}
