import React from 'react';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';


function Orders({ orders, setorders }) {


    useEffect(() => {
        axios.get('http://localhost:8000/order', { withCredentials: true })
            .then((response) => {
                setorders(response.data);
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
                    "Unable to load orders"
                );
            });
    }, []);

    return (
        orders.length === 0 ? <A /> : <B prop={orders} />
    );
}
function A() {
    return (
        <div className="orders">
            <div className="no-orders  p-5">
                <p className='pt-5' style={{ opacity: "0.6", fontWeight: "300" }}>You havent placed any orders today</p>
                <button className='btn '><Link to="/">Get started</Link></button>
            </div>
        </div>
    );
}
function B({ prop }) {
    return (
        <div className='orders'>
            <h3 className="title">Orders ({prop.length})</h3>
            <div className="order-table">
                <table>
                    <tr className='table-row'>
                        <th>Date</th>
                        <th>Instrument</th>
                        <th>Qty.</th>
                        <th>Price</th>
                        <th>Mode</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                    {prop.map((order, index) => {
                        const profClass = order.status == "COMPLETED" ? "profit" : "loss";
                        return (
                            <tr key={index} className='table-row'>
                                <td>
                                    {new Date(order.createdAt).toLocaleString([], {
                                        day: "2-digit",
                                        month: "short",
                                    })}
                                </td>
                                <td>{order.name}</td>
                                <td>{order.qty}</td>
                                <td>{order.price}</td>
                                <td>{order.mode}</td>
                                <td>
                                    {new Date(order.createdAt).toLocaleString([], {
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })}
                                </td>
                                <td className={profClass}>{order.status}</td>
                            </tr>
                        );
                    })}
                </table>
            </div >
        </div>
    );
}
export default Orders;