import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const user = useLoaderData();
  console.log(user);
  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const updateUser = { name, email };

    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("User Updated");
        }
      });
  };
  return (
    <div>
      <h2>Update pages</h2>
      <form onSubmit={handleUpdateUser}>
        <input
          type="text"
          name="name"
          defaultValue={user?.name}
          placeholder="name"
        />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={user?.email}
          placeholder="email"
        />
        <br />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default Update;
