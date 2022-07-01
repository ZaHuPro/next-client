import React from "react";

import BasicLayout from "../components/templates/basic";
import Users from "../components/molecules/users";
import UserAdded from "../components/molecules/user-added";
import { Container } from "../components/atoms/container";

const Home = () => {
  return (
    <Container>
      <div className="w-full text-center m-8">
      <h1>Home</h1>
      </div>
      <Users />
      <UserAdded />
    </Container>
  );
};

Home.layout = BasicLayout;

export default Home;
