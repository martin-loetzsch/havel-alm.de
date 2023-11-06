
'use client'

import React, { FunctionComponent } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";


const Map2: FunctionComponent = () => {
  // Implement the component logic here
  return (
      // https://www.openstreetmap.org/#map=14/53.4269/12.9467&layers=P
      <MapContainer center={[53.4352, 12.9467]} zoom={14} scrollWheelZoom={false}
          style={{ height: '100%' }}>
          <TileLayer url='https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=db5ae1f5778a448ca662554581f283c5'
              attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      </MapContainer>
  )
}

export default Map2