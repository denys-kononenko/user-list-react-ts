import { createContext, useEffect, useState } from 'react';
import { User } from '../types/User';
import { getUsers } from '../helpers/api';

type UserContextType = {
  users: User[],
  hasError: boolean,
  usersIds: number[],
}

export const UsersContext = createContext<UserContextType>({
  users: [],
  hasError: false,
  usersIds: [],
})

type Props = {
  children: React.ReactNode,
};

export const UsersProvider: React.FC<Props> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [hasError, setHasError] = useState(false);
  const usersIds = users.map(user => user.id);

  useEffect(() => {
    getUsers()
      .then(res => {
        setUsers(res);
        setHasError(false)
      })
      .catch(() => setHasError(true));
  }, [])

  return (
    <UsersContext.Provider value={{ users, hasError, usersIds }}>
      {children}
    </UsersContext.Provider>
  )
}
