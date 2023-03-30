import {Flex} from '@chakra-ui/react';
import useUsers from '../../hooks/useUsers';
import Avatar from '../profile/Avatar';

export default function Header({uid}) {
  const {user,isLoading} = useUsers(uid)
  if (isLoading) return "Loading user...";


  return (
  <Flex
  alignItems="center"
  borderBottom="2px solid"
  borderColor="teal.100"
  p="3"
  bg="gray.50">

  <Avatar user={user}/>
  </Flex>
  );
}
