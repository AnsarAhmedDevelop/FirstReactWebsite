import React from "react";
import web from '../src/images/img-1.jpg';
import Common from './Common';


function Home() {
  return ( 
    <>
     <Common name="Grow Your Bussiness with" 
    imgsrc={web} 
    visit="/service" 
    btnname="Get Started"/>
    </>
  );
};



export default Home;
