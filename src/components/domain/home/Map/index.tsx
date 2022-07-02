/* eslint-disable no-unused-vars */
import { useRef, useCallback, useState, useEffect } from 'react';
import { Layer, LngLatBoundsLike } from 'mapbox-gl';
import ReactMapGL, { MapRef } from 'react-map-gl';
import { fromJS } from 'immutable';

import MAP_STYLE from './map-style-light-v10.json';
import 'mapbox-gl/dist/mapbox-gl.css';

const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN?.replace(
  / /g,
  ''
);

const defaultMapStyle: any = fromJS(MAP_STYLE);

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
        latitude: 37.566536,
        zoom: 3,
      }}
      style={{
        width: '100vw',
        height: '100vh',
      }}
      mapStyle={defaultMapStyle}
      mapboxAccessToken={mapboxAccessToken}
      maxBounds={maxBounds as LngLatBoundsLike}
    />
  );
};

export default Map;
