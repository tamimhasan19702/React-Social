import { Modal, ModalContent, ModalOverlay,ModalHeader, ModalCloseButton,ModalBody, HStack, FormControl, FormLabel, Button } from "@chakra-ui/react";
import React from "react";

export default function EditProfile({isOpen,onClose}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
        
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton avatar />
        <ModalBody>
        <HStack spacing="5">
          <FormControl py="4">
           <FormLabel htmlFor="picture">Change avatar</FormLabel>
           <input type="file" accept="image/*" onChange={() => {}}/>
          </FormControl>
        </HStack>

        <Button
        loadingText="Uploading"
        w="full"
        my="4"
        colorScheme="purple">
            Save
        </Button>

        </ModalBody>

    </ModalContent>
    </Modal>
  ) ;
}
