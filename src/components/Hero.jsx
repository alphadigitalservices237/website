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
           Chez nous
           <br />
           <span style={{ fontWeight: 600 }}>L’innovation</span> et la <br />
           <span style={{ fontWeight: 700, fontStyle: 'italic' }}>{"{"}</span>
           <span style={{ fontStyle: 'italic' }}>Digitalisation</span>
           <span style={{ fontWeight: 700, fontStyle: 'italic' }}>{"}"}</span> des <br />
           entreprises
           <br />
           est notre <span style={{ fontWeight: 600 }}>Priorité</span>

         </div>

         <div className="hero-description-two">
           Nous vous proposons des services de haut qualité dans le domaine de la
           Tech.
         </div>
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
