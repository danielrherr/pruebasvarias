import styles from './maps.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import Polyline from '@arcgis/core/geometry/Polyline';
import Graphic from '@arcgis/core/Graphic';
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol';
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol';
import Point from '@arcgis/core/geometry/Point';
import '@arcgis/core/assets/esri/themes/light/main.css';
import { Scale } from 'lucide-react';
interface MapsComponentsProps {
  trackingPoints: number[][]; // Definimos la propiedad como un array de arrays de números
}
const MapsComponents: React.FC<MapsComponentsProps> = ({ trackingPoints }) => {
  const mapDiv = useRef<HTMLDivElement>(null);  // Referencia al div del mapa
  const [view, setView] = useState<MapView | null>(null);

  useEffect(() => {
    if (mapDiv.current) {
      // Crear un WebMap con un mapa base
      const webmap = new WebMap({
        basemap: 'streets-vector'  // Cambia el basemap a tu preferencia
      });

      // Crear una vista de mapa y asociarla al contenedor de React (div)
      const newView = new MapView({
        container: mapDiv.current,  // Referencia al contenedor div
        map: webmap,
        center: [-1, 0],  // Centro del mapa en el origen (0, 0) para mostrar el mundo
        zoom: 1,  // Un nivel de zoom más bajo para ver el mundo entero
        constraints: {
          rotationEnabled: false,

        }
      });

      setView(newView); // Guardar la vista para usar más adelante

      // Limpiar el view al desmontar el componente
      return () => {
        if (newView) {
          newView.destroy();
        }
      };
    }
  }, []);

  useEffect(() => {
    if (view) {
      // Crear una polilínea para la ruta de seguimiento
      const polyline = new Polyline({
        paths: [trackingPoints]  // Define la ruta con los puntos de seguimiento
      });

      // Crear un símbolo para la línea
      const lineSymbol = new SimpleLineSymbol({
        color: [226, 119, 250],
        width: 1.4
      });

      // Crear un gráfico para la polilínea
      const lineGraphic = new Graphic({
        geometry: polyline,
        symbol: lineSymbol // Usar el símbolo creado
      });

      view.graphics.add(lineGraphic); // Agregar la polilínea al mapa

      // Marcar los puntos de seguimiento en el mapa
      trackingPoints.forEach(point => {
        const pointGraphic = new Graphic({
          geometry: new Point({  // Usar la clase Point para la geometría
            longitude: point[0],
            latitude: point[1]
          }),
          symbol: new SimpleMarkerSymbol({
            color: [0, 0, 255],  // Marcador azul
            outline: { color: [255, 255, 255], width: 2 }
          }) // Usar el símbolo de marcador creado
        });
        view.graphics.add(pointGraphic); // Agregar el marcador al mapa
      });
    }
  }, [view]);

  return (
    <div className={styles.container}> {/* Contenedor del mapa */}
      <div
        ref={mapDiv}
        className={styles.maps}
         // Asegúrate de que el mapa ocupe todo el espacio del contenedor
      />
    </div>
  );
};

export default MapsComponents;

