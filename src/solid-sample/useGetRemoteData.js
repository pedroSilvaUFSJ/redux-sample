import { useEffect, useState } from "react";
import { useHttpGetRequest } from "./useHttpGet";
const REMOTE_URL = "https://jsonplaceholder.typicode.com/users";

export const useGetRemoteData = () => {
  const { users, isLoading } = useHttpGetRequest(REMOTE_URL);
  const [filteredUsers, setFilteredUsers] = useState(() => []);

  useEffect(() => {
    const filteredList = users.map(({ id, name, phone, email }) => {
      return {
        id,
        name,
        contact: `${phone} , ${email}`,
      };
    });
    setFilteredUsers(filteredList);
  }, [users]);

  return { filteredUsers, isLoading };
};
