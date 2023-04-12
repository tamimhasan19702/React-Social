import { Modal, ModalContent, ModalOverlay,ModalHeader, ModalCloseButton,ModalBody, HStack, FormControl, FormLabel, Button } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../hooks/useAuth";
import Avatar from "./Avatar";
import useUpdateAvatar from "../../hooks/useUpdateAvatar";


export default function EditProfile({isOpen,onClose}) {

  const {user,isLoading:authLoading} = useAuth();
  const {
    setFile,
    updateAvatar,
    isLoading:fileLoading,
    fileUrl
  } = useUpdateAvatar(user?.id);

  function handleChange(e){
  setFile(e.target.files[0])
  }

  if (authLoading) return "Loading..."

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
        
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton avatar />
        <ModalBody>

        <HStack spacing="5">

          <Avatar user={user} avatar={fileUrl}/>
          <FormControl py="4">
           <FormLabel htmlFor="picture">Change avatar</FormLabel>
           <input type="file" accept="image/*" onChange={handleChange}/>
          </FormControl>
        </HStack>

        <Button
        loadingText="Uploading"
        w="full"
        my="4"
        colorScheme="teal"
        onClick={updateAvatar}
        isLoading={fileLoading}>
            Save
        </Button>

        </ModalBody>

    </ModalContent>
    </Modal>
  ) ;
}
