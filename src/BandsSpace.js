import React from 'react'


function BandsSpace(props) {
  const { name, formed, origin, fans  } = props
  return (
    <div className="BandsSpace">
      <h1>{name}</h1>
      <div>{formed}</div>
      <div>{origin}</div>
      <div>{fans}</div>
    </div>
    
  )
}

export default BandsSpace