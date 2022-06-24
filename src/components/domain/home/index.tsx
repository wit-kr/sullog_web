import Map from 'react-map-gl';
import { MAPBOX_TOKEN } from 'shared/key';

const Home = () => (
  <h1>
    <Map
      initialViewState={{
        longitude: 126.977966,
        latitude: 37.566536,
        zoom: 14,
      }}
      style={{
        width: 600,
        height: 400,
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    />
  </h1>
);

export default Home;
