import { useState } from "react";
import {uploadBytes,ref,getDownloadURL} from 'firebase/storage';
import { db,storage } from "../lib/firebase";
import { useToast } from "@chakra-ui/react";
import {doc,updateDoc} from 'firebase/firestore';
import { useNavigate } from "react-router-dom";


export default function useUpdateAvatar(uid) {
  const [isLoading,setLoading] = useState(false);
  const [file,setFile] = useState(null)
  const toast = useToast(); 
  const navigate = useNavigate()

  async function updateAvatar(){

    if(!file){
        toast({
            title: "No file selected",
            description: "Please select a file to upload",
            status: "error",
            isClosable: true,
            position: "top",
            duration: 3000,
        });

        return ;
    }

    setLoading(true);
    const fileRef = ref(storage,"avatars/" + uid)
    await uploadBytes(fileRef,file);

    const avatarUrl = await getDownloadURL(fileRef)

    const docRef = doc(db,"users",uid)
    await updateDoc(docRef, {avatar: avatarUrl})

    toast({
        title: "Profile Updated",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 3000,
    });
    setLoading(false);

    navigate(0);
  }

    return {setFile,updateAvatar,isLoading};
}
