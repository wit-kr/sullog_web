import { LngLatBoundsLike } from 'mapbox-gl';
import ReactMapGL from 'react-map-gl';

const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN?.replace(
  / /g,
  ''
);

const Map = () => {
  const maxBounds = [
    {
      lat: 32.671017,
      lng: 125.801356,
    },
    {
      lat: 38.724702,
      lng: 129.693625,
    },
  ];

  return (
    <ReactMapGL
      initialViewState={{
        longitude: 126.977966,
        latitude: 37.516536,
        zoom: 10,
      }}
      style={{
        width: '100%',
        height: '100vh',
      }}
      mapStyle="mapbox://styles/jinho1011/cl5faqrml00dv15qvknh8tres"
      mapboxAccessToken={mapboxAccessToken}
      maxBounds={maxBounds as LngLatBoundsLike}
    />
  );
};

export default Map;
