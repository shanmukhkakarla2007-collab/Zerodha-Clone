
import React from 'react';
import Hero from './hero.jsx';
import Awards from './awards.jsx';
import Stats from './stats.jsx';
import Pricing from './pricing.jsx';
import Education from './education.jsx';
import Openaccount from '../openaccount.jsx';

function Homepage() {
    return ( 
        <> 
           <Hero/>
           <Awards/>
           <Stats/>
           <Pricing/>
           <Education/>
           <Openaccount/>
        </>
    );
}

export default Homepage;