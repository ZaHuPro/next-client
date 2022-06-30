import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import BasicLayout from "../components/Layouts/Basic";
import { GET_USERS } from "../gql/user";
import Users from "../components/Molecule/Users";
import UserAdded from "../components/Molecule/UserAdded";

const Home = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <div className="w-full text-center m-8">
      <h1>Home</h1>
      </div>
      <Users />
      <UserAdded />
    </div>
  );
};

Home.layout = BasicLayout;

export default Home;
