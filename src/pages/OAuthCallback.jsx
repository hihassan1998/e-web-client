import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OAuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {

    const start = performance.now();

    const token = new URLSearchParams(window.location.search).get("token");


    const end = performance.now();

    console.log("🌐 OAUTH LOGIN TIME:", end - start, "ms");

    console.log(
      "📦 TOKEN SIZE:",
      token?.length || 0,
      "bytes"
    );

    if (token) {
      localStorage.setItem("token", token);

      console.log("✅ OAuth token saved");

      window.dispatchEvent(new Event("storage"));

      console.log("✅ OAuth token saved and refreched page");

      navigate("/users");
    } else {
      navigate("/login");
    }
  }, []);

  return <h2>Logging in with Google...</h2>;
}