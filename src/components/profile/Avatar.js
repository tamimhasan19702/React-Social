import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Avatar as ChakraAvatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PROTECTED} from "../../lib/routes";

export default function Avatar({user}) {
  return (
    <ChakraAvatar 
        as={Link}
        to={`${PROTECTED}/profile/${user.id}`}
        name={user.username} 
        size="2xl" 
        src={user?.avatar}
        _hover={{ cursor: "pointer", opacity: "0.6"}}/>
  );
}



