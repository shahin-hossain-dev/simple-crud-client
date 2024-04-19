import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2>Users Number : {users.length}</h2>

      {users.map((user) => (
        <p key={user._id}>
          name: {user.name}, email: {user.email}
        </p>
      ))}
    </div>
  );
};

export default Users;
