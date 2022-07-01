import React from "react";
import { useSubscription } from "@apollo/client";

import { USER_ADDED_SUBSCRIPTION } from "../../gql/user";

const UserAdded = () => {
  const { loading, error, data } = useSubscription(USER_ADDED_SUBSCRIPTION);

  console.log({ data, error });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
    <div className="w-full flex justify-center items-center">
      <div>
          <span className="m-4 font-mono uppercase">
          {data.userAdded.id}/{data.userAdded.username}
          </span>
      </div>
    </div>
  );
};

export default UserAdded;
