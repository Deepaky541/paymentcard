import React from 'react'
import "./data.css"

export const Data = (props) => {
  return (
    <div className="heading">

     <div className='headings'>
      <h3>Case study</h3>
      <h1>{props.heading}</h1>
      <h1>{props.subheading}</h1>
      <h3>{props.device}</h3>
      </div>

      <div className='arrow'>
      <h1>{"->"}</h1>
      </div>
      
    </div>
  );
}
