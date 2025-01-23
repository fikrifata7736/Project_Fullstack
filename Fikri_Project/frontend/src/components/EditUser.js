import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/users/${id}`);
      const { name, email, age } = response.data;
      setName(name);
      setEmail(email);
      setAge(age);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/users/${id}`, { name, email, age });
      navigate("/");
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <h1 className="title has-text-centered">Edit User</h1>
        <form onSubmit={updateUser}>
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
                Update User
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
