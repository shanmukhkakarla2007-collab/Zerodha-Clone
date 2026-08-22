import React from 'react';
import Hero from './hero';
import Leftsection from './leftsection';
import Rightsection from './rightsection';
import Universe from './universe';


function Productspage() {
    return ( 
        <>
           <Hero/>
           <Leftsection imageURL="assests\images\kite.png" productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore=""/>
           <Rightsection imageURL="assests\images\console.png" productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." Learnmore=""/>
           <Leftsection imageURL="assests\images\coin.png" productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore="" googlePlay="" appStore=""/>
           <Rightsection imageURL="assests\images\kiteconnect.png" productName="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." Learnmore=""/>
           <Leftsection imageURL="assests\images\varsity.png" productName="Varsity mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore="" googlePlay="" appStore=""/>
           <Universe/>
        </>
     );
}

export default Productspage;