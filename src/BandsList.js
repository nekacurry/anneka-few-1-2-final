import React from 'react'
import data from './metal.json'
import BandsSpace from './BandsSpace.js'

function BandsList() {

  const spaces = data.map(( { band_name, formed, origin, fans }, i ) => {
    return (
        <BandsSpace 
        name={band_name}
        formed={formed}
        origin={origin}
        fans={fans}
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