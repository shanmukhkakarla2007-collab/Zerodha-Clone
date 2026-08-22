import React from 'react';
import { watchlist as Watchlist } from '../data/data';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from 'react';
import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";
import { Sidebarchart } from './sidebarchart';


function Sidebar({prop,formstock,propsell}) {
  const data = {
    labels:Watchlist.map((stock)=>{return stock.name}),
    datasets: [
      {
        label: '# of Votes',
        data:Watchlist.map((stock)=>{return stock.price}) ,
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="sidebar-container">
      <div className="input-container  border-bottom">
        <input type="text" style={{ width: "89%", border: "none" }} placeholder='Search eg:infy, bse, nifty fut weekly, gold mcx' />
        <span className='mx-2' style={{ opacity: "0.5", fontSize: "0.8rem" }}>{Watchlist.length}/50</span>
      </div>
      <ul className='pb-5'>
        {Watchlist.map((stock, index) => {
          return (
            <Items stock={stock} index={index} formstock={formstock} pannel={prop} propsell={propsell}/>
          );
        })}
      </ul>
      <Sidebarchart data={data}/>
    </div>
  );
}



function Items({ stock,index,pannel,formstock,propsell}) {
  let [itemhover,setitemhover]=useState(false);
  function mousein(){
    setitemhover(true);
  }
  function mouseout(){
    setitemhover(false);
  }
  return (
    <li className="list" key={index} onMouseEnter={mousein} onMouseLeave={mouseout} style={{backgroundColor:itemhover? "#f5f5f5" : "white"}} >
      <div className='details'>
        <div className={stock.isDown ? 'info down' : 'info up'}>{stock.name}</div>
        <div className="values">
          <span className='mx-1 percentage'>{stock.percent}</span>
          <span className= {`mx-1 di ${stock.isDown ? 'info down' : 'info up'}`} >{stock.isDown ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}</span>
          <span className='mx-1'>{stock.price}</span>
        </div>
      </div>
      {itemhover && <BS uid={index} pannel={pannel} stock={stock} formstock={formstock} propsell={propsell}/>}
    </li>
  );
}




function BS({uid,pannel,stock,formstock,propsell}){
  function setpannel(){
    propsell(false);
    pannel(true);
    formstock(stock);
  }
  function setpannelsell(){
    pannel(false);
    propsell(true);
    formstock(stock);
  }
  return(
    <span className="actions">
      <Tooltip  title="Buy (B)"placement="top" arrow  TransitionComponent={Grow}><button className="buy" onClick={setpannel}>Buy</button></Tooltip>
      <Tooltip  title="Sell (S)"placement="top" arrow  TransitionComponent={Grow}><button className="sell" onClick={setpannelsell}>Sell</button></Tooltip>
      <Tooltip  title="Analitics (A)"placement="top" arrow  TransitionComponent={Grow}><button className="action-btn"><i class="fa-solid fa-chart-simple"></i></button></Tooltip>
      <Tooltip  title="Delete"placement="top" arrow  TransitionComponent={Grow}><button className="action-btn"><i class="fa-solid fa-trash"></i></button></Tooltip>
      <Tooltip  title="More"placement="top" arrow  TransitionComponent={Grow}><button className="action-btn"><i class="fa-solid fa-ellipsis"></i></button></Tooltip>
    </span>
  );
}


export default Sidebar;