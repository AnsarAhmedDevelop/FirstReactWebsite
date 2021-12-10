import React from "react";
import web from '../src/images/img-3.jpg';
import Common from './Common';


function About() {
  return ( 
    <>
    <Common name="Welcome to About page" 
    imgsrc={web} 
    visit="/contact" 
    btnname="Contact Now"/>
    </>
  );
};



export default About;
