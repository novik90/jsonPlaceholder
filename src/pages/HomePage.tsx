import React from "react";
import { Layout, List } from "antd";
import { useUsers } from "src/context/UserContext";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { users } = useUsers();
  return (
    <Layout>
      <List
        itemLayout="horizontal"
        dataSource={users}
        renderItem={({ id, name, username, email, company }) => (
          <List.Item
            actions={[<Link to={`/user/${id}`}>Preview</Link>]}
          >
            <List.Item.Meta
              title={name}
              description={username}
            />
          </List.Item>
        )}
      >
      </List>
    </Layout>
  );
};

export default HomePage;
