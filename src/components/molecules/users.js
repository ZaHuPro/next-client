import React from "react";
import { useQuery } from "@apollo/client";

import { GET_USERS } from "../../gql/user";

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div className="w-full flex justify-center items-center">
      <div>
        {data.users.map((e) => (
          <span className="m-4 font-mono uppercase" key={e.id}>
            {e.username}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Users;
