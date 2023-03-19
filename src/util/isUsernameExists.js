import { query,collection, where, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

export async function isUsernameExists(username){
    const Query = query( collection(db, "users"), where("username", "==", username));
    
    const querySnapshot = await getDocs(Query);

    return querySnapshot.size > 0;
}