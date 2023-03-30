import {query,doc} from 'firebase/firestore';
import { useDocumentData } from "react-firebase-hooks/firestore";
import { db } from "../lib/firebase";

export default function useUsers(id) {

  const q = query(doc(db, "users", id))  
  const [user,isLoading] = useDocumentData(q);
  return {user, isLoading};
}
