'use client'

import React, { FunctionComponent } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const Map: FunctionComponent = () => {
    // Implement the component logic here
    return (
        // https://www.openstreetmap.org/#map=14/53.4269/12.9467&layers=P
        <MapContainer center={[53.4269, 12.9467]} zoom={15} scrollWheelZoom={false}
            style={{ height: '100%' }}>
            <TileLayer
                url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png'
                attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        </MapContainer>
    )
}

export default Map;
