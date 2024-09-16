import { createContext, ReactNode, useEffect, useContext, useState } from "react";
import { User } from "../Types/customTypes";

interface UserContextType {
  users: User[];
  getUserById: (id: string) => User | undefined;
  addUser: (user: User) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | undefined>(undefined);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  }

  const getUserById = (id: string) => {
    let findedUser = null;
    if (users.length) {
      findedUser = users.filter(user => String(user.id) === id)[0];
      return findedUser;
    } else {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(result => setUser(result));
      return user;
    }
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(result => setUsers(result));
  }, [])

  return (
    <UserContext.Provider value={{ users, addUser, getUserById }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUsers = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUsers must be used within a UserProvider');
  }

  return context;
}