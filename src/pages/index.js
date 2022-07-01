import React from "react";

import BasicLayout from "../components/Layouts/Basic";
import Users from "../components/Molecule/Users";
import UserAdded from "../components/Molecule/UserAdded";
import { Container } from "../components/Elements/container";

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
