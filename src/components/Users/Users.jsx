import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

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
          const remainingUser = users.filter((user) => user._id !== id);
          setUsers(remainingUser);
          alert("user deleted");
        }
      });
  };

  return (
    <div>
      <Link to={"/"}>Home</Link>
      <h2>Users Number : {users.length}</h2>
      {users.map((user) => (
        <p key={user._id}>
          name: {user.name}, email: {user.email}{" "}
          <Link to={`/update/${user._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handleDeleteUser(user._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
