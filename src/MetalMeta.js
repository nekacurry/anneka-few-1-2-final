import data from './metal.json'
import React from 'react'
import './MetalMeta.css'

function MetalMeta() {
  const dataCount = Object.keys(data).length
  return (
    <div className="MetalMeta">
      <h2>Metal Bands &#129304;</h2>
            <div className="Meta-Subtitle">Bands: {dataCount}</div>
    </div>
  )
}

export default MetalMeta