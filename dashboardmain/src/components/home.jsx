import React from 'react';
import Topbar from './topbar';
import Dashboard from './dashboard';
import { toast, ToastContainer } from "react-toastify";
import { useState, useEffect } from 'react';
import axios from "axios";

function Home() {
  const [user, setuser] = useState(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const message = params.get("message");
    const type = params.get("type");
    if (message && type === "success") {
      toast.success(message);
      window.history.replaceState(
        {},
        "",
        window.location.pathname
      );
    }
    axios.get("http://localhost:8000/account", { withCredentials: true })
      .then((response) => {
        setuser(response.data);
      })
      .catch((error) => {
        const status = error.response?.status;
        if (status === 401) {
          toast.error(
            error.response?.data?.message || "Please login first"
          );
          setTimeout(() => {
            window.location.href = "http://localhost:5173/login";
          }, 1500);
          return;
        }
        toast.error(
          error.response?.data?.message ||
          "Unable to load userdeatils"
        );
      });

  }, []);

  return (
    <>
      <Topbar user={user} setuser={setuser} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
      <Dashboard user={user} setuser={setuser} />
    </>
  );
}

export default Home;