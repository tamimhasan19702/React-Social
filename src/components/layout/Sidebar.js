import { Box, Button, Stack, Code } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { PROTECTED, USERS } from "../../lib/routes";


function ActiveUser(){
    const {user, isLoading} = useAuth();
    if(isLoading) return "Loading..."

    return (
    <Stack align="center" spacing="5" my="8">
        
        <Code>@{user.id}</Code>
        <Button 
        colorScheme="teal" 
        w="full"
        as={Link} 
        to={`${PROTECTED}/profile/${user?.id}`}>
            Edit Profile
        </Button>

    </Stack>
    )
}

export default function Sidebar() {
  return (
    <Box
    px="6"
    height="100vh"
    w="100%"
    maxW="300px"
    borderLeft="1px solid"
    borderLeftColor="teal.100"
    position="sticky"
    top="16"
    display={{base: "none", md: "block"}}
    >
    {/* //activeUser component */}
    <ActiveUser />
    
    <Box align="center">
    <Box 
    as="ul" 
    borderBottom="2px solid" 
    borderColor="teal.200" />
    <Button 
    variant="outline"
    colorScheme="teal"
    mt="4"
    size="sm"
    as={Link}
    to={USERS}>
        All Users
    </Button>
    </Box>

    </Box>
  );
}
