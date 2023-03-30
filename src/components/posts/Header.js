import {Flex,Box, Text} from '@chakra-ui/react';
import useUsers from '../../hooks/useUsers';
import Avatar from '../profile/Avatar';
import { Button } from '@chakra-ui/react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export default function Header({uid, date}) {
  const {user,isLoading} = useUsers(uid)
  if (isLoading) return "Loading user...";


  return (
  <Flex
  alignItems="center"
  borderBottom="2px solid"
  borderColor="teal.100"
  p="3"
  bg="gray.50">

  <Avatar user={user} size="md"/>

  <Box ml="4">
   <Button colorScheme="teal" variant="link">
      {user.username}
   </Button>
   <Text fontSize="sm" color="gray.500">
    {formatDistanceToNow(date)} ago</Text>
  </Box>

  </Flex>
  );
}
