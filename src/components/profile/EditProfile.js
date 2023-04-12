import { Modal, ModalContent, ModalOverlay,ModalHeader, ModalCloseButton,ModalBody, HStack, FormControl, FormLabel, Button } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../hooks/useAuth";
import Avatar from "./Avatar";

export default function EditProfile({isOpen,onClose}) {

  const {user,isLoading} = useAuth()

  if (isLoading) return "Loading..."

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
        
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton avatar />
        <ModalBody>

        <HStack spacing="5">
          <Avatar user={user} />
          <FormControl py="4">
           <FormLabel htmlFor="picture">Change avatar</FormLabel>
           <input type="file" accept="image/*" onChange={() => {}}/>
          </FormControl>
        </HStack>

        <Button
        loadingText="Uploading"
        w="full"
        my="4"
        colorScheme="teal">
            Save
        </Button>

        </ModalBody>

    </ModalContent>
    </Modal>
  ) ;
}
