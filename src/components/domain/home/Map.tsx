import { useRef, useCallback } from 'react';
import { Layer, LngLatBoundsLike } from 'mapbox-gl';
import ReactMapGL, { MapRef } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN?.replace(
    / /g,
    ''
  );

  const mapRef = useRef<MapRef>(null);

  const handleOnMapLoad = useCallback(() => {
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

  const maxBounds = [
    {
      lat: 32.671017,
      lng: 125.301356,
    },
    {
      lat: 39.224702,
      lng: 129.693625,
    },
  ];

  return (
    <ReactMapGL
      ref={mapRef}
      onLoad={handleOnMapLoad}
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
      maxBounds={maxBounds as LngLatBoundsLike}
    />
  );
};

export default Map;
