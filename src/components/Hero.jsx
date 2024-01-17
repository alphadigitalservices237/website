import React from "react";
import image from './image/globe.png';
import './style.css'; 
import Header from "./Header";

function Hero () {
 return (

  <div>
    <Header/>
   <div className="hero-container">
       <div className="hero-div-one">
         <div className="hero-description">
          <span  className="text-one">Chez nous</span> 
           <br />
           <span   className="text-two">L’innovation</span> <span  className="text-one">et la </span>  <br />
           <span  className="text-two" >{"{"}</span>
           <span  className="text-two">Digitalisation</span>
           <span >{"}"}</span><span  className="text-one">des </span> <br />
           <span  className="text-one">entreprises</span>
           <br />
           <span  className="text-one"> est notre </span><span className="text-two" >Priorité</span>

         </div>

         <span className="hero-description-two">
         Nous vous proposons des services de haut qualité dans le domain de la Tech.
         </span>
         <button className="hero-contact-two">Contact Us</button>
       </div>



       <div className="div-image">
         <img src={image} alt="alpha global" />
       </div>

     </div>
     </div>
 );
}
export default Hero;
