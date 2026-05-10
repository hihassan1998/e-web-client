import { useState, useEffect } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("token", token);
      nav("/users");
    }
  }, []);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3001/auth/google";
  };

  const handleLogin = async () => {
    try {

      const start = performance.now();

      const res = await API.post("/auth/login", {
        email,
        password,
      });


      const end = performance.now();

      console.log("🔐 LOCAL LOGIN TIME:", end - start, "ms");

      console.log(
        "📦 LOGIN PAYLOAD SIZE:",
        JSON.stringify({
          email,
          password,
        }).length,
        "bytes"
      );

      localStorage.setItem("token", res.data.token);
      console.log("logged in");

      window.dispatchEvent(new Event("storage"));

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
          <hr />
          <button onClick={handleGoogleLogin}>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}