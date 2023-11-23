'use client'

import React, { FunctionComponent } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";


type MapProvider = {
    url: string,
    attribution: string,
    zoom: number,
    maxZoom: number
}

const mapProviders: { [key: string]: MapProvider } = {
    openTopoMap: {
        url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        zoom: 14,
        maxZoom: 16
    },
    openCycleMap: {
        url: 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=db5ae1f5778a448ca662554581f283c5',
        attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        zoom: 14,
        maxZoom: 18
    },
    openStreetMapHot: {
        url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
        zoom: 15,
        maxZoom: 19
    },
}

type LeafletMapDynamicProps = {
    type: string,
    lat: number,
    lon: number,
    addMarkerAtCenter?: boolean
}


const LeafletMapDynamic: FunctionComponent<LeafletMapDynamicProps> = ({ type, lat, lon, addMarkerAtCenter=false }) => {
    const provider = mapProviders[type]

    return (
        <MapContainer
            center={[lat, lon]}
            zoom={provider.zoom}
            scrollWheelZoom={false}
            maxZoom={provider.maxZoom}
            style={{ height: '100%' }}
        >
            <TileLayer url={provider.url} attribution={provider.attribution} />
            { addMarkerAtCenter && <Marker position={[lat, lon]}/>}
        </MapContainer>
    )
}

export default LeafletMapDynamic

