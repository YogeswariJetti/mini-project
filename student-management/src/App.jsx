import { useState, useEffect } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import backgroundImage from "./assets/background.jpg";

import {
  getSession,
  clearSession,
} from "./utils/storage";

export default function App() {
  const [page, setPage] = useState("signup");
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const session = getSession();

    if (session) {
      setStudent(session);
      setPage("dashboard");
    }
  }, []);

  function logout() {
    clearSession();
    setStudent(null);
    setPage("login");
  }

  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
      body{
        margin:0;
        font-family:Arial, sans-serif;
        background-image:url(${backgroundImage});
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
        background-attachment:fixed;
      }

      .container{
        display:flex;
        justify-content:center;
        align-items:center;
        min-height:100vh;
      }

      .box{
        width:380px;
        background:#ffffff;
        padding:30px;
        border-radius:20px;
        text-align:center;
        box-shadow:0 8px 20px rgba(0,0,0,0.15);
      }

      h1{
        margin-bottom:20px;
      }

      input{
        width:100%;
        padding:12px;
        margin-top:10px;
        border:1px solid #ccc;
        border-radius:8px;
        box-sizing:border-box;
      }
      

      button{
        width:100%;
        padding:12px;
        margin-top:15px;
        border:none;
        background:#2563eb;
        color:white;
        border-radius:8px;
        cursor:pointer;
        font-size:16px;
      }

      button:hover{
        background:#1d4ed8;
      }

      span{
        color:#2563eb;
        cursor:pointer;
        font-weight:bold;
      }

      p{
        margin-top:15px;
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (page === "signup") {
    return <Signup setPage={setPage} />;
  }

  if (page === "login") {
    return (
      <Login
        setPage={setPage}
        setStudent={setStudent}
      />
    );
  }

  return (
    <Dashboard
      student={student}
      logout={logout}
    />
  );
}