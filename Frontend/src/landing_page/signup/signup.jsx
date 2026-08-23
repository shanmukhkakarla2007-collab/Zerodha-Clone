import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

function Signup() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    function submit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        console.log(
            "Password valid:",
            form.elements.password.validity.valid
        );
        if (!form.checkValidity()) {
            event.stopPropagation();
        }
        else {
            axios.post("https://zerodha-clone-backend-chwm.onrender.com/signup", { username, password, email }, { withCredentials: true })
                .then((response) => {
                    console.log("signup successful");
                    window.location.href = "https://zerodha-clone-dashboard-2wcj.onrender.com/?message=Signupsuccessful&type=success";
                })
                .catch((error) => {
                    toast.error(error.response?.data?.message || error.message);
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
    function f3(e) {
        setemail(e.target.value.toLowerCase());
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
                    <label htmlFor="username">Username</label>
                    <input className="form-control" type="text" name='username' value={username} onChange={f1} id="username" required minLength={3} maxLength={30} />
                    <label htmlFor="email">Email</label>
                    <input className="form-control" type="email" name="email" value={email} onChange={f3} id="email" required />
            
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" name="password" value={password} onChange={f2} id="password" required minLength={6} maxLength={30} />
                    <small className="text-muted">
                        Password must consist of at least 6 characters
                    </small>
                    <button className='btn btn-primary mt-3'>Signup</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;