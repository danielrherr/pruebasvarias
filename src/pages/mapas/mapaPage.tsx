import React from 'react'
import MapsComponents from './mapa'

export default function MapaPage() {
  const trackingPoints = [
    [-74.0060, 40.7128],  // Nueva York
    [-73.9352, -40.7306],  // Otro punto en Nueva York
    [73.935242, 40.730610], // Un punto más
    [13.935242, 40.730610], // Un punto más
    //  [-113.935242, 40.730610] 
  ];
  return (
    <div>
      <MapsComponents trackingPoints={trackingPoints} />
    </div>
  )
}
