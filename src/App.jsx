import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Properties from "./pages/Properties";
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import OAuthCallback from "./pages/OAuthCallback";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

function App() {




  return (
    <>
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/oauth-callback"
          element={<OAuthCallback />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* up protected routes for experiemnts */}
        <Route
          path="/properties"
          element={
            // <ProtectedRoute>
              <Properties />
            // </ProtectedRoute>
          }
        />


        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;