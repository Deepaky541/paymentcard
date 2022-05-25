import React from 'react'
import "./logo.css"

export const Logo = (props) => {
   
  return (
    <div className='logos'>
      <img src={props.logo} alt="" />
    </div>
  );
}
