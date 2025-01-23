import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/users", { name, email, age });
      navigate("/");
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <h1 className="title has-text-centered">Add New User</h1>
        <form onSubmit={saveUser}>
          {/* Name Field */}
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                required
              />
            </div>
          </div>
          {/* Email Field */}
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </div>
          </div>
          {/* Age Field */}
          <div className="field">
            <label className="label">Age</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter age"
                required
              />
            </div>
          </div>
          {/* Submit Button */}
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success is-fullwidth">
                Save User
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
