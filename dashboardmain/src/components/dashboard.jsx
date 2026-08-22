import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Apps from "./apps";
import Funds from "./funds";
import Holdings from "./Holdings";
import Orders from "./orders";
import Positions from "./positions";
import Summary from "./summary";
import Sidebar from "./sidebar";
import { useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';

function Dashboard({user,setuser}) {

  const [isshow, setisshow] = useState(false);
  const [isshowsell, setisshowsell] = useState(false);
  const [stock, setstock] = useState({});
  const [orders, setorders] = useState([]);
  const [H, setholdings] = useState([]);

  return (
    <div className="dashboard-container">
      <Sidebar prop={setisshow} formstock={setstock} propsell={setisshowsell} />
      {isshow && <Pannel pannel={setisshow} stock={stock} setstock={setstock} setorders={setorders} orders={orders} H={H} setholdings={setholdings} setuser={setuser} />}
      {isshowsell && <Pannelsell pannel={setisshowsell} stock={stock} setstock={setstock} setorders={setorders} orders={orders} H={H} setholdings={setholdings} setuser={setuser} />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary user={user} holdings={H} setuser={setuser} setholdings={setholdings} />} />
          <Route path="/orders" element={<Orders orders={orders} setorders={setorders} />} />
          <Route path="/holdings" element={<Holdings H={H} setholdings={setholdings} />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
}


function Pannel({ pannel, stock, setstock, setorders, orders, H, setholdings, setuser }) {

  function droppannel() {
    pannel(false);
    setstock({});
  }
  const [qty, setqty] = useState(1);
  function f1(event) {
    setqty(Number(event.target.value));
  }
  async function createorder() {
    let order = {
      name: stock.name,
      qty: qty,
      price: stock.price,
      mode: "BUY"
    }
    axios.post("http://localhost:8000/order/buy", { neworder: order }, { withCredentials: true })
      .then((response) => {
        pannel(false);
        setorders(prev => [
          ...prev,
          response.data.order
        ]);
        if (response.data.message === "COMPLETED") {
          toast.success("ORDER WAS PLACED SUCCESSFULLY");
          setuser(response.data.user);
          if (response.data.holdingtype == "NEW") {
            setholdings(prev => [
              ...prev,
              response.data.holding
            ]);
          }
          else if (response.data.holdingtype == "OLD") {
            setholdings(prev =>
              prev.map(holding =>
                holding.name === response.data.holding.name
                  ? response.data.holding
                  : holding
              )
            );
          }

        }
        else if(response.data.message === "REJECTED"){
          toast.error("ORDER WAS REJECTED DUE TO INSUFFICIENT FUNDS")
        }
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
        else if (status === 400) {
          toast.warning(error.response?.data?.message);
        }
      });
  }
  return (
    <div className="pannel">
      <form >
        <input type="number" placeholder='qty.' value={qty} onChange={f1} />
        <div>{stock.price}</div>
      </form>
      <div className="row mt-5 px-3">
        <div className="col-6 pt-2">
          <span style={{ fontSize: "0.8rem" }}>Margin required ₹{(qty * stock.price).toFixed(2)}</span>
        </div>
        <div className="col-6 BS">
          <button className='btn btn-primary px-3 py-2' onClick={createorder}>BUY</button>
          <button onClick={droppannel} className='btn btn-primary px-3 py-2' style={{ backgroundColor: "#d4d4d4", color: "#666" }}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
function Pannelsell({ pannel, stock, setstock, setorders, orders, H, setholdings, setuser, }) {

  function droppannel() {
    pannel(false);
    setstock({});
  }
  const [qty, setqty] = useState(1);
  function f1(event) {
    setqty(Number(event.target.value));
  }
  async function createorder() {
    let order = {
      name: stock.name,
      qty: qty,
      price: stock.price,
      mode: "SELL"
    }
    await axios.post("http://localhost:8000/order/sell", { neworder: order }, { withCredentials: true })
      .then((response) => {
        pannel(false);
        setorders(prev => [
          ...prev,
          response.data.order
        ]);
        if (response.data.message === "COMPLETED") {
          toast.success("ORDER WAS COMPLETED SUCCESSFULLY");
          setuser(response.data.user);
          if (response.data.change === "UPDATED") {
            setholdings(
              H.map((order) => {
                return order.name == response.data.holding.name ? response.data.holding : order;
              })
            )
          }
          else if (response.data.change === "DELETED") {
            setholdings((prev) =>
              prev.filter(
                (holding) => holding.name !== response.data.holding.name
              )
            );
          }
        }
        else if(response.data.message === "REJECTED"){
          toast.error(response.data.message2);
        }
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
        else if (status === 400) {
          toast.warning(error.response?.data?.message);
        }
      });
  }
  return (
    <div className="pannel">
      <form >
        <input type="number" placeholder='qty.' value={qty} onChange={f1} />
        <div>{stock.price}</div>
      </form>
      <div className="row mt-5 px-3">
        <div className="col-6 pt-2">
          <span style={{ fontSize: "0.8rem" }}>Sell value ₹{(qty * stock.price).toFixed(2)}</span>
        </div>
        <div className="col-6 BS">
          <button className='btn  btn-danger px-3 py-2' onClick={createorder}>Sell</button>
          <button onClick={droppannel} className='btn btn-primary px-3 py-2' style={{ backgroundColor: "#d4d4d4", color: "#666" }}>Cancel</button>
        </div>
      </div>
    </div>
  );
}


export default Dashboard;