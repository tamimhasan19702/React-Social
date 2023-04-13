import { SimpleGrid } from "@chakra-ui/react";

import User from "./User";
import useAllUsers from "../../hooks/useAllUsers";

export default function Users() {
    const {users, isLoading} = useAllUsers()

    if(isLoading) return "Loading...";
  
    return (
        <SimpleGrid columns={[2,3,4]} spacing={[2,3]} px="10px" py="6">
         {users?.map((user) => (
            <User isLoading={isLoading} key={user?.id} user={user}/>
         ))}
        </SimpleGrid>
    );
}
