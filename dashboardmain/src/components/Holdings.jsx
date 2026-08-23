
import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Holdingschart } from './holdingschart';
import { Link } from "react-router-dom";
import { watchlist as stocks } from '../data/data';

function Holdings({ H, setholdings }) {
    useEffect(() => {
        axios.get('https://zerodha-clone-backend-chwm.onrender.com/holdings', { withCredentials: true })
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
                        window.location.href = "http://localhost:5173/login";
                    }, 1500);
                    return;
                }
                toast.error(
                    error.response?.data?.message ||
                    "Unable to load holdings"
                );
            });
    }, []);

    const labels = H.map((holding) => {
        return holding.name;
    });
    const data = {
        labels,
        datasets: [
            {
                label: 'Price',
                data: H.map((holding) => {
                    const currentStock = stocks.find(
                        stock => stock.name === holding.name
                    );
                    return currentStock? currentStock.price: holding.price;
                }),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    };

    const investment = H.reduce((total, holding) => {
        return total + holding.avg * holding.qty;
    }, 0);

    const currentValue = H.reduce((total, holding) => {

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

    return (
        H.length === 0 ?
            <div className="orders">
                <div className="no-orders  p-5">
                    <p className='pt-5' style={{ opacity: "0.6", fontWeight: "300" }}>You dont have any holdings</p>
                    <button className='btn '><Link to="/">Get started</Link></button>
                </div>
            </div> :
            < div className="holdings" >
                <h3 className="title">Holdings ({H.length})</h3>
                <div className="order-table">
                    <table>
                        <tr className='table-row'>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg. cost</th>
                            <th>LTP</th>
                            <th>Cur. val</th>
                            <th>P&L</th>
                            {/* <th>Net chg.</th>
                            <th>Day chg.</th> */}
                        </tr>
                        {H.map((holding, index) => {
                            const currentStock = stocks.find(
                                stock => stock.name === holding.name
                            );
                            const currentPrice = currentStock.price;
                            const curValue = currentPrice * holding.qty;
                            const isProfit = curValue - holding.avg * holding.qty >= 0.0;
                            const profClass = isProfit ? "profit" : "loss";
                            const dayClass = holding.isLoss ? "loss" : "profit";
                            return (
                                <tr key={index} className='table-row'>
                                    <td>{holding.name}</td>
                                    <td>{holding.qty}</td>
                                    <td>{holding.avg.toFixed(2)}</td>
                                    <td>{currentStock.price.toFixed(2)}</td>
                                    <td>{curValue.toFixed(2)}</td>
                                    <td className={profClass}>
                                        {(curValue - holding.avg * holding.qty).toFixed(2)}
                                    </td>
                                </tr>);
                        })}
                    </table>
                </div >
                <div className="row ">
                    <div className="col-4 py-5">
                        <h5>
                            <span>{investment.toFixed(2)}</span>{" "}
                        </h5>
                        <p>Total investment</p>
                    </div>
                    <div className="col-4 py-5">
                        <h5>
                            <span>{currentValue.toFixed(2)}</span>{" "}
                        </h5>
                        <p>Current value</p>
                    </div>
                    <div className="col-4 py-5">
                        <h5>{pl.toFixed(2)}({plPercentage.toFixed(2)}%)</h5>
                        <p>P&L</p>
                    </div>
                </div>
                <Holdingschart data={data} />
            </div >
    );
}

export default Holdings;