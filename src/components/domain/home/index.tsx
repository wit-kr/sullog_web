import Map from 'react-map-gl';

const Home = () => {
  const mapboxAccessToken =
    process.env.NODE_ENV === 'production'
      ? process.env.MAPBOX_TOKEN?.replace(/ /g, '')
      : process.env.NEXT_PUBLIC_MAPBOX_TOKEN?.replace(/ /g, '');

  console.log(
    '🚀 ~ file: index.tsx ~ line 5 ~ Home ~ mapboxAccessToken',
    mapboxAccessToken
  );

  return (
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
        mapboxAccessToken={mapboxAccessToken}
      />
    </h1>
  );
};

export default Home;
