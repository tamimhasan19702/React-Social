import {useState} from 'react';

export default function useDeletePost(id) {
    const [isLoading,setLoading] = useState(false);

    async function deletePost(){

    }
  
    return { deletePost, isLoading};
}
