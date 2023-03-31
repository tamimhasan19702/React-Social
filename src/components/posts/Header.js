import {Flex,Box, Text} from '@chakra-ui/react';
import useUsers from '../../hooks/useUsers';
import Avatar from '../profile/Avatar';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import UserNameButton from '../profile/UserNameButton';

export default function Header({post}) {
  const { uid, date } = post;
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
   <UserNameButton user={user}/>
   <Text fontSize="sm" color="gray.500">
    {formatDistanceToNow(date)} ago</Text>
  </Box>

  </Flex>
  );
}
