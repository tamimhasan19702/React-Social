import { useCollectionData } from "react-firebase-hooks/firestore";
import {collection} from 'firebase/firestore';
import { db } from "../lib/firebase";

export default function useAllUsers() {
    const [users,isLoading] = useCollectionData(collection(db,"users"));
    return {users,isLoading};
}
