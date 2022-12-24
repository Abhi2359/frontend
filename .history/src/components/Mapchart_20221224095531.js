import React from 'react'
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import ReactDOM from 'react-dom'
import 

const Mapchart = () => {
  return (
    <div><ComposableMap>
    <Geographies geography="/features.json">
      {({ geographies }) =>
        geographies.map((geo) => (
          <Geography key={geo.rsmKey} geography={geo} />
        ))
      }
    </Geographies>
  </ComposableMap></div>
  )
}

export default Mapchart