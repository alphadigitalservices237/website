import React from 'react';
import image from './image/service.png';
import './style.css'; 

const Service = () => {
 return (
  
   <section className="service-section" id="services">
     <h1 className="small-header">| Service</h1>
     <h1 className="main-header">Un service d’expertise à porté de main</h1>
     <img src={image} alt="description" className="service-large-image"/>
   </section>
 );
};

export default Service;



