import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { watchlist as stocks } from '../data/data';
import { toast } from "react-toastify";


function Summary({ user, holdings, setuser, setholdings }) {
    useEffect(() => {
        axios.get("https://zerodha-clone-backend-chwm.onrender.com/holdings", { withCredentials: true })
            .then((response) => {
                setholdings(response.data);
            })
            .catch((error) => {
                const status = error.response?.status;
                if (status === 401) {
                    toast.error(
                        error.response?.data?.message || "Please login first"
                    );
                    setTimeout(() => {
                        window.location.href = "https://zerodha-clone-frontend-oqzt.onrender.com/login";
                    }, 1500);
                    return;
                }
                toast.error(
                    error.response?.data?.message ||
                    "Unable to load holdings"
                );
            });
    }, []);
    if (!user) {
        return (
            <div>
                Loading
            </div>
        )
    }
    const investment = holdings.reduce((total, holding) => {
        return total + holding.avg * holding.qty;
    }, 0);
    const currentValue = holdings.reduce((total, holding) => {

        const currentStock = stocks.find(
            stock => stock.name === holding.name
        );

        const currentPrice = currentStock
            ? currentStock.price
            : holding.price;

        return total + currentPrice * holding.qty;

    }, 0);
    const pl = currentValue - investment;
    const plPercentage = investment === 0
        ? 0
        : (pl / investment) * 100;
    const color = pl >= 0 ? "profit" : "loss";


    return (
        <div className="support-container  m-4 my-4">
            <div className="greeting border-bottom  py-2" style={{ opacity: "0.9" }}>
                <p className='fs-4'>Hi, User!</p>
            </div>
            <div className="Equity py-5 border-bottom ">
                <p style={{ fontSize: "1.2rem", fontWeight: "300" }}><i className="fa-regular fa-clock"></i>&nbsp; Equity</p>
                <div className="row px-5 mx-3 py-3">
                    <div className="col-3 " >
                        <h1 style={{ fontWeight: "300" }}>{(user.funds / 1000).toFixed(2)}K</h1>
                        <p style={{ fontSize: "0.8rem", opacity: "0.6" }}>Margin available</p>
                    </div>
                    <div className="col-3 pt-2" style={{ fontSize: "0.8rem", opacity: "0.6" }}>
                        <p>Margins used <span className="px-2" style={{ fontSize: "0.9rem", opacity: "1" }}>{((user.openingBalance - user.funds) / 1000).toFixed(2)}K</span> </p>
                        <p>Opening balance <span className="px-2" style={{ fontSize: "0.9rem", opacity: "1" }}>{(user.openingBalance / 1000).toFixed(2)}K</span> </p>
                    </div>
                </div>
            </div>
            <div className="Holdings py-5 border-bottom ">
                <p style={{ fontSize: "1.2rem", fontWeight: "300" }}><i className="fa-regular fa-credit-card"></i>&nbsp; Holdings <span>({holdings.length})</span></p>
                <div className="row px-5 mx-3 py-3">
                    <div className="col-3 " >
                        <h1 style={{ fontWeight: "300" }} className={color}>{(pl.toFixed(2) / 1000).toFixed(2)}K <span style={{ fontSize: "0.8rem" }}>{pl >= 0 ? `+${plPercentage.toFixed(2)}%` : `${plPercentage.toFixed(2)}%`}</span></h1>
                        <p style={{ fontSize: "0.8rem", opacity: "0.6" }} className={color}>{pl.toFixed(2)}</p>
                    </div>
                    <div className="col-3 pt-2" style={{ fontSize: "0.8rem", opacity: "0.6" }}>
                        <p>Current Value <span className="px-2" style={{ fontSize: "0.9rem", opacity: "1" }}>{(currentValue / 1000).toFixed(2)}K</span> </p>
                        <p>Investment <span className="px-2" style={{ fontSize: "0.9rem", opacity: "1" }}>{(investment / 1000).toFixed(2)}K</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Summary;