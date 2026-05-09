import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      console.log("logged in");

      nav("/users");
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div className={"container"}>

        <div className={"container"}>
          <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          <input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={"container"}>

          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}