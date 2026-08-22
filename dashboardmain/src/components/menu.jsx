
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";


function Menu({ user, setuser }) {

    let [selectedmenu, setselectedmenu] = useState(0);
    let [profileclick, setprofileclick] = useState(false);
    function settingindex(index) {
        setselectedmenu(index);
    }
    function handleprofileclick() {
        setprofileclick(!profileclick);
    }
    const classmenu = "menu1";
    function logout() {
        axios.get("http://localhost:8000/logout")
            .then((response) => {
                window.location.href = "http://localhost:5173/?message=Logoutsuccessful&type=success";
            })
            .catch((error) => {
                toast.error("LOGOUT IS UNSUCCESSFULL");
            })
    }
    return (
        <div className="menu-container">
            <img src="https://zerodha-dashboard-bice.vercel.app/logo.png" alt="logo" />
            <div className='lists'>
                <ul>
                    <li><Link className={selectedmenu === 0 ? classmenu : "menu2 hovermenu"} to="/" onClick={() => { settingindex(0) }}>Dashboard</Link></li>
                    <li><Link className={selectedmenu === 1 ? classmenu : "menu2 hovermenu"} to="/orders" onClick={() => { settingindex(1) }}>Orders</Link></li>
                    <li><Link className={selectedmenu === 2 ? classmenu : "menu2 hovermenu"} to="/holdings" onClick={() => { settingindex(2) }}>Holdings</Link></li>
                    <li><Link className={selectedmenu === 3 ? classmenu : "menu2 hovermenu"} to="/positions" onClick={() => { settingindex(3) }}>Positions</Link></li>
                    <li><Link className={selectedmenu === 4 ? classmenu : "menu2 hovermenu"} to="/funds" onClick={() => { settingindex(4) }}>Funds</Link></li>
                    <li><Link className={selectedmenu === 5 ? classmenu : "menu2 hovermenu"} to="/apps" onClick={() => { settingindex(5) }}>Apps</Link></li>
                </ul>
            </div>
            <div className="profile" onClick={handleprofileclick}>
                <div className="avatar">{user ? user.username.slice(0, 2).toUpperCase() : "Loading..."}</div>
                <span className="username">{user ? user.username : "Loading..."}</span>
                {/* <span className="username" onClick={logout}>LOGOUT</span> */}
                {profileclick && (
                    <div className="profile-dropdown">
                        <div className="profile-header">
                            <div className="profile-avatar big-avatar">{user ? user.username.slice(0, 2).toUpperCase() : "Loading..."}</div>
                            <div>
                                <h6>{user.username}</h6>
                                <small>{user.email}</small>
                            </div>
                        </div>
                        <hr />
                        <div className="profile-balance">
                            <small>Available funds</small>
                            <h6>
                                ₹{user.funds?.toLocaleString("en-IN")}
                            </h6>
                        </div>
                        <hr />
                        <button className="profile-option">
                            <i className="fa-regular fa-user"></i>
                            My Profile
                        </button>
                        <button className="profile-option">
                            <i className="fa-solid fa-wallet"></i>
                            Funds
                        </button>
                        <button
                            className="profile-option logout-option"
                            onClick={logout}
                        >
                            <i className="fa-solid fa-right-from-bracket"></i>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Menu;