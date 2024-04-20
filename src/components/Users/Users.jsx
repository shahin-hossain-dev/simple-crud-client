import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadUsers = useLoaderData();
  const [users, setUsers] = useState(loadUsers);

  const handleDeleteUser = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.deletedCount);
        if (data.deletedCount > 0) {
          const newUsers = users.filter((user) => user._id !== id);
          setUsers(newUsers);
          alert("user deleted");
        }
      });
  };

  return (
    <div>
      <h2>Users Number : {users.length}</h2>
      {users.map((user) => (
        <p key={user._id}>
          name: {user.name}, email: {user.email}{" "}
          <button onClick={() => handleDeleteUser(user._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
