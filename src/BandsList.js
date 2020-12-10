import React from 'react'
import data from './metal.json'
import BandsSpace from './BandsSpace.js'
import './BandsList.css'

function BandsList() {

  const spaces = data.map(( { band_name, formed, origin, fans, split, style } ) => {
    fans = fans * 1000
    return (
        <BandsSpace 
        name={band_name}
        formed={formed}
        origin={origin}
        fans={fans.toLocaleString('en')}
        split={split}
        style={style}
      />
    )
  })

  return (
    <div className="BandsList">
      { spaces }
    </div>
  )
}

export default BandsList