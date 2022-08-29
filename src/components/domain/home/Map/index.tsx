/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable radix */
import { GeoJSONSource, LngLatBoundsLike, MapLayerMouseEvent } from 'mapbox-gl';
import ReactMapGL, { Layer, Marker, Source, useMap } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { createRef, useEffect, useRef, useState } from 'react';
import type { MapRef } from 'react-map-gl';
import {
  clusterCountBackgroundLayer,
  clusterCountLayer,
  clusterLayer,
  unclusteredPointLayer,
} from './layer';

const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN?.replace(
  / /g,
  ''
);

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

const MapImage = ({ id, src }: { id: string; src: string }) => {
  const { current: map } = useMap();

  if (map && !map.hasImage(id)) {
    map.loadImage(src, (error, image) => {
      if (error) throw error;
      if (!map.hasImage(id) && image) {
        map.addImage(id, image);
      }
    });
  }

  return null;
};

const Map = ({ records }: { records: any }) => {
  const mapRef = useRef<MapRef>(null);
  const [data, setData] = useState({
    type: 'FeatureCollection',
    features: records.map((record: any) => ({
      type: 'Feature',
      properties: {
        name: record.name,
        seq: record.seq,
        type: record.type,
        manufacturer: record.manufacturer,
      },
      geometry: {
        type: 'Point',
        coordinates: [Number(record.lat), Number(record.lng)],
      },
    })),
  });

  const onClick = (event: any) => {
    if (mapRef.current) {
      if (event.features && event.features.length > 0) {
        const feature = event.features[0];
        if (feature.layer.id === 'clusters' && feature.properties) {
          const clusterId = feature.properties.cluster_id;

          const mapboxSource = mapRef.current.getSource(
            'records'
          ) as GeoJSONSource;

          mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) {
              return;
            }

            if (mapRef.current) {
              mapRef.current.easeTo({
                center: feature.geometry.coordinates,
                zoom,
                duration: 500,
              });
            }
          });
        }

        if (feature.layer.id === 'unclustered-point') {
          console.log(feature.properties);
        }
      }
    }
  };

  return (
    <ReactMapGL
      initialViewState={{
        longitude: 126.977966,
        latitude: 37.516536,
        zoom: 7,
      }}
      style={{}}
      mapStyle="mapbox://styles/jinho1011/cl5faqrml00dv15qvknh8tres"
      mapboxAccessToken={mapboxAccessToken}
      // maxBounds={maxBounds as LngLatBoundsLike}
      interactiveLayerIds={[clusterLayer.id, unclusteredPointLayer.id]}
      onClick={onClick}
      ref={mapRef}
    >
      <MapImage id="pin" src="/image/icon/pin.png" />
      <MapImage id="count" src="/image/icon/pointCount.png" />
      <Source
        id="records"
        type="geojson"
        data={data as any}
        cluster
        clusterMaxZoom={10}
        clusterRadius={50}
      >
        <Layer {...clusterLayer} />
        <Layer {...clusterCountBackgroundLayer} />
        <Layer {...clusterCountLayer} />
        <Layer {...unclusteredPointLayer} />
      </Source>
    </ReactMapGL>
  );
};

export default Map;
