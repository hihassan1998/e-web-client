import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const nav = useNavigate();

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", {
        email,
        password,
        username,
      });

      nav("/login");
    } catch (err) {
      alert("Register failed");
    }
  };

  return (
    <div>
      <h1>Register</h1>

      <input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}