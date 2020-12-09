import React from 'react'


function BandsSpace(props) {
  const { name, formed, origin, fans  } = props
  return (
    <div className="BandsSpace">
      <h1>{name}</h1>
      <div>Formed: {formed}</div>
      <div>{origin}</div>
      <div>Fans: {fans}</div>
    </div>
    
  )
}

export default BandsSpace