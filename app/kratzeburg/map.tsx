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
        <MapContainer center={[53.4352, 12.9467]} zoom={14} scrollWheelZoom={false}
            style={{ height: '100%' }}>
            <TileLayer
                url='https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
                attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
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
