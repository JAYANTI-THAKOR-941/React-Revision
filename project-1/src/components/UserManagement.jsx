import React, { useEffect, useState } from "react";
import axios from "axios";

const UserManagement = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [users,setUsers] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/users", form);
    alert("User Added successfully.!");

    setForm({
      name: "",
      email: "",
      password: "",
    });
  };
  

  //get data from json-server  
  const fetchUsers = async()=>{
    const res = await axios.get("http://localhost:3000/users");
    setUsers(res.data);
  }


  useEffect(()=>{
    fetchUsers();
  },[users])
  return (
    <div>
      <h1>UserManagement</h1>

      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Action</th>
        </tr>
        {
          users.map((u)=>(
            <tr>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.password}</td>
              <td><button>Edit</button><button>Delete</button></td>
            </tr>
          ))
        }
      </table>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name."
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email."
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Password."
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <button>Add User</button>
      </form>
    </div>
  );
};

export default UserManagement;
