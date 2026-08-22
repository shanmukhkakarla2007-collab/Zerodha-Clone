
import React from 'react';
import { Link } from 'react-router-dom';
import {toast} from "react-toastify";
import { useEffect } from 'react';
function Navbar() {
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
    }, []);
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-white py-3" >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><img style={{ width: "25%" }} src="assests\images\logo.svg" alt="logo" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item mx-3">
                                    <Link className="nav-link active" aria-current="page" to="/Signup">Signup</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                                </li>
                                <li className="nav-item  mx-3">
                                    <Link className="nav-link " to="/About">About</Link>
                                </li>
                                <li className="nav-item dropdown  mx-3">
                                    <Link className="nav-link" to="/Products" >Products</Link>
                                </li>
                                <li className="nav-item  mx-3">
                                    <Link className="nav-link" to="/Pricing" >Pricing</Link>
                                </li>
                                <li className="nav-item  mx-3">
                                    <Link className="nav-link" to="/Support">Support</Link>
                                </li>
                                <li className="nav-item  mx-3">
                                    <a className="nav-link" ><i class="fa-solid fa-bars"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="border"></div>
        </>

    );
}

export default Navbar;