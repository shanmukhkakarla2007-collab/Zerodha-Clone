import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

function Login() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    function submit(event) {
        event.preventDefault();
        const form = event.currentTarget;

        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        else {
            axios.post("https://zerodha-clone-backend-chwm.onrender.com/login", { username, password }, { withCredentials: true })
                .then((response) => {
                    window.location.href = "https://zerodha-clone-dashboard-2wcj.onrender.com/?message=Loginsuccessful&type=success";
                })
                .catch((error)=>{
                    toast.error(error.response.data.message);
                })
        }
        form.classList.add("was-validated");
    }
    function f1(e) {
        setusername(e.target.value);
    }
    function f2(e) {
        setpassword(e.target.value);
    }
    return (
        <div className='signup-container'>
            <div className='form'>
                <div className="logo" style={{ textAlign: "center" }}>
                    <Link className="navbar-brand" to="/"><img style={{ width: "35%" }} src="assests\images\logo.svg" alt="logo" /></Link>
                </div>
                <div className="title pt-3" style={{ textAlign: "center" }}>
                    <h4>Create your Account</h4>
                    <p style={{ fontSize: "0.8rem", opacity: "0.7" }}>Start your investing journey today</p>
                </div>
                <form onSubmit={submit} noValidate className='needs-validation'>
                    <label For="username">Username</label>
                    <input type="text" name='username' value={username} onChange={f1} id="username" required className="form-control"/>
                    <label For="password">Password</label>
                    <input className="form-control"type="password" name="password" value={password} onChange={f2} id="password" required />
                    <label For="password">password must consits altest 6 characters</label>
                    <button className='btn btn-primary mt-3'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
