import { useRef, useCallback } from 'react';
import { Layer } from 'mapbox-gl';
import ReactMapGL, { MapRef } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN?.replace(
    / /g,
    ''
  );

  const mapRef = useRef<MapRef>(null);

  const onMapLoad = useCallback(() => {
    if (mapRef.current) {
      const map = mapRef.current.getMap();
      map.getStyle().layers.forEach((layer: Layer) => {
        if (
          layer.layout &&
          Object.prototype.hasOwnProperty.call(layer.layout, 'text-field')
        ) {
          map.setLayoutProperty(layer.id, 'text-field', [
            'coalesce',
            ['get', 'name_ko'],
            ['get', 'name'],
          ]);
        }
      });
    }
  }, []);

  return (
    <ReactMapGL
      ref={mapRef}
      onLoad={onMapLoad}
      initialViewState={{
        longitude: 126.977966,
        latitude: 37.566536,
        zoom: 3,
      }}
      style={{
        width: '100vw',
        height: 400,
      }}
      mapStyle="mapbox://styles/mapbox/light-v10"
      mapboxAccessToken={mapboxAccessToken}
    />
  );
};

export default Map;
