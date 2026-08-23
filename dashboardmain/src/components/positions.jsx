
import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

function Positions() {
    const [P, setpositions] = useState([]);
    useEffect(() => {
        axios.get("https://zerodha-clone-backend-chwm.onrender.com/positions", { withCredentials: true })
            .then((response) => {
                setpositions(response.data);
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
                    "Unable to load positions"
                );
            });
    }, [])
    return (
        P.length === 0 ?
            <div className="orders">
                <div className="no-orders  p-5">
                    <p className='pt-5' style={{ opacity: "0.6", fontWeight: "300" }}>You dont have any positions</p>
                    <button className='btn '><Link to="/">Get started</Link></button>
                </div>
            </div> :
            <div className="positions">
                <h3 className="title">Positions ({P.length})</h3>
                <div className="order-table">
                    <table>
                        <tr className='table-row'>
                            <th>Product</th>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg.</th>
                            <th>LTP</th>
                            <th>P&L</th>
                            <th>Chg.</th>
                        </tr>
                        {P.map((stock, index) => {
                            const curValue = stock.price * stock.qty;
                            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                            const profClass = isProfit ? "profit" : "loss";
                            const dayClass = stock.isLoss ? "loss" : "profit";
                            return (
                                <tr key={index} className='table-row'>
                                    <td>{stock.product}</td>
                                    <td>{stock.name}</td>
                                    <td>{stock.qty}</td>
                                    <td>{stock.avg.toFixed(2)}</td>
                                    <td>{stock.price.toFixed(2)}</td>
                                    <td className={profClass}>
                                        {(curValue - stock.avg * stock.qty).toFixed(2)}
                                    </td>
                                    <td className={dayClass}>{stock.day}</td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            </div>
    );
}

export default Positions;