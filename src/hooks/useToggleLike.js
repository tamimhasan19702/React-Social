import {useState} from 'react';
import {db} from '../lib/firebase';
import {doc,updateDoc,arrayRemove,arrayUnion} from 'firebase/firestore';

export default function useToggleLike({id,isLiked,uid}) {
  
  const [isLoading, setLoading] = useState(false);
  
  async function toggleLike(){
    setLoading(true);
    const docRef = doc(db,"posts",id);
    await updateDoc(docRef, {
      likes: isLiked ? arrayRemove(uid) : arrayUnion(uid),
    });
    isLoading(false);
  }

  return {toggleLike, isLoading}
}
