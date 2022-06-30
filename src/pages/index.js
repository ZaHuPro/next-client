import React, { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import client from "../apollo-client";

import BasicLayout from "../components/Layouts/Basic";

const Home = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const { data, loading } = await client.query({
      query: gql`
        query Users {
          users {
            id
            username
          }
        }
      `,
    });
    console.log({ data, loading })
    if(data.users && data.users.length > 0) {
      setUsers(data.users);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <div>
        {users.map((e) => <span className="m-4 font-mono uppercase" key={e.id}>{e.username}</span>)}
      </div>
    </div>
  );
};

Home.layout = BasicLayout;

export default Home;
