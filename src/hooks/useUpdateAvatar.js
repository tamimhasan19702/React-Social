import { useState } from "react";
import {uploadBytes,ref} from 'firebase/storage';
import { db,storage } from "../lib/firebase";
import { useToast } from "@chakra-ui/react";

export default function useUpdateAvatar(uid) {
  const [isLoading,setLoading] = useState(false);
  const [file,setFile] = useState(null)
  const toast = useToast(); 

  async function updateAvatar(){
    setLoading(true);
    const fileRef = ref(storage,"avatars/" + uid)
    await uploadBytes(fileRef,file)
    toast({
        title: "Profile Updated",
        status: "success",
        isClosable: true,
        position: "top",
        duration: 3000,
    });
    setLoading(false);
  }

    return {setFile,updateAvatar,isLoading};
}
