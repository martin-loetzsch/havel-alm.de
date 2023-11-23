import React from 'react';
import { useMemo } from "react";
import dynamic from 'next/dynamic';

type LeafletMapProps = {
    type: string;
    lat: number;
    lon: number;
    height?: string,
    addMarkerAtCenter?: boolean
}

const LeafletMap: React.FC<LeafletMapProps> = ({ type, lat, lon, height='85vw', addMarkerAtCenter=false }) => {
    const Map = useMemo(() => dynamic(() => import('./leafletMapDynamic'), { ssr: false }), [])

    return (
        <div style={{
            width: '100%', height: height,
            backgroundColor: '#eeeeee'
        }}>
            <Map type={type} lat={lat} lon={lon} addMarkerAtCenter={addMarkerAtCenter}/>
        </div>
    );
}

export default LeafletMap;
