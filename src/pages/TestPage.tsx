import { Layout } from 'antd';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useUsers } from 'src/context/UserContext';
import { User } from 'src/Types/customTypes';

const TestPage = () => {
  const { id } = useParams();
  const { getUserById } = useUsers();
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const requestedUser = getUserById(String(id));
    setUser(requestedUser);
  }, [getUserById, id])

  return (
    <Layout>
      {user?.name}
    </Layout>
  )
}

export default TestPage