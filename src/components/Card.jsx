import React from 'react'
import { Logo } from "./Logo";
import { Data } from "./Data";
import { Date } from "./Date";
import  "./card.css";


export const Card = (props) => {

     const color=props.cardData.color;
     
  return (
    <div className="card" style={{ backgroundColor : color }}>

      <div className="top">
        <Date date={props.cardData.date} className="date" />
        <Logo logo={props.cardData.logo} className="logo" />
      </div>

      <div className="bottom">
        <Data
          heading={props.cardData.heading}
          subheading={props.cardData.subheading}
          device={props.cardData.device}
          className="data"
        />
      </div>
      
    </div>
  );
}
