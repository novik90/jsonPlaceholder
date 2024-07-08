import { useEffect, useState } from "react";

import UserView from "./Components/UserView/UserView";
import { User } from "./Types/customTypes";

import cls from "./App.module.css";

function App() {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(result => setUsers(result));
  }, [])

  console.log(users)
  return (
    <div className={cls.main}>
      <h1>jsonPlaceholder</h1>
      <div className={cls.users_list}>
        {users?.map(u => <UserView key={u.id} {...u} />)}
      </div>
    </div>
  );
}

export default App;
