/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable radix */
import { LngLatBoundsLike } from 'mapbox-gl';
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

const records = [
  {
    seq: 7,
    name: '오메기 술',
    type: '약주',
    abv: '13%',
    volume: '375ml',
    price: '￦13,000 (가격은 판매처 별로 상이할 수 있습니다.)',
    ingredients: '쌀,차조,입국,누룩,효모,효소,청호,조릿대,감초,정제수',
    manufacturer: '제주샘영농조합법인',
    owner: '김숙희',
    lat: '126.337530129204',
    lng: '33.4447875750448',
    province: '제주특별자치도',
    city: '제주시',
    phone: '064) 799-4225',
  },
  {
    seq: 9,
    name: '제주 고소리술',
    type: '소주/증류주',
    abv: '40%',
    volume: '400ml',
    price: '￦45,000(가격은 판매처 별로 상이할 수 있습니다.)',
    ingredients: '잡곡,누룩,정제수',
    manufacturer: '제주술익는집',
    owner: '김희숙',
    lat: '126.793773142145',
    lng: '33.3849602978721',
    province: '제주특별자치도',
    city: '서귀포시',
    phone: '064-787-5046',
  },
  {
    seq: 14,
    name: '황진이_375ml',
    type: '약주',
    abv: '12%',
    volume: '375ml',
    price: '￦3,500(가격은 판매처 별로 상이할 수 있습니다.)',
    ingredients: '쌀,오미자,산수유',
    manufacturer: '농업회사법인(유)술소리',
    owner: '김금자',
    lat: '127.380353410198',
    lng: '35.3840017294622',
    province: '전북',
    city: '남원시',
    phone: '063-625-5050',
  },
  {
    seq: 15,
    name: '붉은 원숭이',
    type: '탁주',
    abv: '10.8%',
    volume: '375ml',
    price: '￦7,000 (가격은 판매처 별로 상이할 수 있습니다.)',
    ingredients: '쌀(국내산 경기미 100%),누룩,홍국,정제수',
    manufacturer: '술샘',
    owner: '신인건',
    lat: '127.298614632461',
    lng: '37.2335021777382',
    province: '경기',
    city: '용인시 처인구',
    phone: '070) 4218-5225',
  },
  {
    seq: 18,
    name: '고소리 술',
    type: '소주/증류주',
    abv: '40%',
    volume: '700ml',
    price: '￦45,000 (가격은 판매처 별로 상이할 수 있습니다.)',
    ingredients: '쌀,차조,입국,누룩,효모,효소,정제수,스테비올 배당체',
    manufacturer: '제주샘영농조합법인',
    owner: '김숙희',
    lat: '126.337530129204',
    lng: '33.4447875750448',
    province: '제주특별자치도',
    city: '제주시',
    phone: '064) 799-4225',
  },
  {
    seq: 20,
    name: '오메기 맑은술',
    type: '약주',
    abv: '16%',
    volume: '500ml',
    price: '￦25,000(가격은 판매처 별로 상이할 수 있습니다.)',
    ingredients: '좁쌀,햅쌀,정제수,누룩',
    manufacturer: '제주술익는집',
    owner: '김희숙',
    lat: '126.793773142145',
    lng: '33.3849602978721',
    province: '제주특별자치도',
    city: '서귀포시',
    phone: '064-787-5046',
  },
  {
    seq: 26,
    name: '이화주',
    type: '탁주',
    abv: '8%',
    volume: '100ml',
    price: '￦6,500 (가격은 판매처 별로 상이할 수 있습니다.)',
    ingredients: '쌀(국내산 경기미 100%),누룩,정제수',
    manufacturer: '술샘',
    owner: '신인건',
    lat: '127.298614632461',
    lng: '37.2335021777382',
    province: '경기',
    city: '용인시 처인구',
    phone: '070) 4218-5225',
  },
  {
    seq: 28,
    name: '강쇠_370ml',
    type: '약주',
    abv: '13%',
    volume: '370ml',
    price: '￦2,500(가격은 판매처 별로 상이할 수 있습니다.)',
    ingredients: '쌀,누룩,오가피',
    manufacturer: '농업회사법인(유)술소리',
    owner: '김금자',
    lat: '127.380353410198',
    lng: '35.3840017294622',
    province: '전북',
    city: '남원시',
    phone: '063-625-5050',
  },
  {
    seq: 32,
    name: '고소리 술',
    type: '소주/증류주',
    abv: '40%',
    volume: '375ml',
    price: '￦25,000 (가격은 판매처 별로 상이할 수 있습니다.)',
    ingredients: '쌀,차조,입국,누룩,효모,효소,정제수,스테비올 배당체',
    manufacturer: '제주샘영농조합법인',
    owner: '김숙희',
    lat: '126.337530129204',
    lng: '33.4447875750448',
    province: '제주특별자치도',
    city: '제주시',
    phone: '064) 799-4225',
  },
  {
    seq: 56,
    name: '문배술헤리티지25_375ml',
    type: '소주/증류주',
    abv: '25%',
    volume: '375ml',
    price: '￦55,000(375ml*9병)(가격은 판매처 별로 상이할 수 있습니다.)',
    ingredients: '메조,찰수수,쌀',
    manufacturer: '문배주양조원',
    owner: '이기춘',
    lat: '126.594275119212',
    lng: '37.7006484277629',
    province: '경기',
    city: '김포시',
    phone: '031-989-9333',
  },
  {
    seq: 62,
    name: '소나무와 학_750ml',
    type: '소주/증류주',
    abv: '43%',
    volume: '750ml',
    price: '￦39,000(가격은 판매처 별로 상이할 수 있습니다.)',
    ingredients: '쌀(국내산),솔잎,황기,당귀,효모,아스파탐',
    manufacturer: '용두산조은술',
    owner: '조국환',
    lat: '128.236902549546',
    lng: '37.2151221744669',
    province: '충북',
    city: '제천시',
    phone: '043-651-0770',
  },
  {
    seq: 77,
    name: '희양산막걸리 9%',
    type: '탁주',
    abv: '9%',
    volume: '750ml',
    price: '￦8,000 (가격은 판매처 별로 상이할 수 있습니다)',
    ingredients: '쌀(국내산),누룩,정제수',
    manufacturer: '두술도가',
    owner: '김두수',
    lat: '128.060988946648',
    lng: '36.6466092680672',
    province: '경북',
    city: '문경시',
    phone: '010-4276-2329',
  },
  {
    seq: 79,
    name: '문배술 헤리티지 40도_200ml',
    type: '소주/증류주',
    abv: '40%',
    volume: '200ml',
    price: '￦48,000(200ml*4병)(가격은 판매처 별로 상이할 수 있습니다.)',
    ingredients: '메조,찰수수,쌀',
    manufacturer: '문배주양조원',
    owner: '이기춘',
    lat: '126.594275119212',
    lng: '37.7006484277629',
    province: '경기',
    city: '김포시',
    phone: '031-989-9333',
  },
  {
    seq: 90,
    name: '겨울소주 25',
    type: '소주/증류주',
    abv: '25%',
    volume: '360ml',
    price: '￦10,000 (가격은 판매처 별로 상이할 수 있습니다)',
    ingredients: '증류원액(국내산쌀),효모,효소,정제수',
    manufacturer: '두이술공방',
    owner: '이윤범',
    lat: '126.841460370935',
    lng: '36.4694659901202',
    province: '충남',
    city: '청양군',
    phone: '041-943-7678',
  },
  {
    seq: 93,
    name: '미르40',
    type: '소주/증류주',
    abv: '40%',
    volume: '375ml',
    price: '￦23,000 (가격은 판매처 별로 상이할 수 있습니다.)',
    ingredients: '쌀(국내산 경기미 100%),누룩,정제수',
    manufacturer: '술샘',
    owner: '신인건',
    lat: '127.298614632461',
    lng: '37.2335021777382',
    province: '경기',
    city: '용인시 처인구',
    phone: '070) 4218-5225',
  },
  {
    seq: 97,
    name: '지란지교 무화과 탁주',
    type: '탁주',
    abv: '12%',
    volume: '500ml',
    price: '￦30,000(2병) (가격은 판매처 별로 상이할 수 있습니다)',
    ingredients:
      '찹쌀,멥쌀(국내산),전통누룩(국내산 밀),정제수,무화과청,레드비트분말,밀함유',
    manufacturer: '(유)친구들의술지란지교',
    owner: '임숙주',
    lat: '127.141767111218',
    lng: '35.3740213022112',
    province: '전북',
    city: '순창군',
    phone: '010-9533-1478',
  },
  {
    seq: 107,
    name: '우도 땅콩 전통주',
    type: '기타',
    abv: '6%',
    volume: '750ml',
    price: '￦4,000 (가격은 판매처 별로 상이할 수 있습니다.)',
    ingredients: '정제수,전분당,백미,국,땅콩분,효모,젖산 등',
    manufacturer: '조은술 세종',
    owner: '경기호',
    lat: '127.480082818495',
    lng: '36.6770436895408',
    province: '충북',
    city: '청주시 청원구',
    phone: '043) 218-7689',
  },
  {
    seq: 120,
    name: '술취한 원숭이',
    type: '탁주',
    abv: '10.8%',
    volume: '375ml',
    price: '￦7,000 (가격은 판매처 별로 상이할 수 있습니다.)',
    ingredients: '쌀(국내산 경기미 100%),누룩,홍국,정제수',
    manufacturer: '술샘',
    owner: '신인건',
    lat: '127.298614632461',
    lng: '37.2335021777382',
    province: '경기',
    city: '용인시 처인구',
    phone: '070) 4218-5225',
  },
  {
    seq: 126,
    name: '천비향 오양주 약주',
    type: '약주',
    abv: '16%',
    volume: '500ml',
    price: '￦40,000(가격은 판매처 별로 상이할 수 있습니다.)',
    ingredients: '국내산 쌀,누룩',
    manufacturer: '농업회사법인(주)좋은술',
    owner: '이예령',
    lat: '126.989393344952',
    lng: '37.0004932679597',
    province: '경기',
    city: '평택시',
    phone: '031-681-8929',
  },
  {
    seq: 130,
    name: '도깨비술 7%',
    type: '탁주',
    abv: '7%',
    volume: '750ml',
    price: '￦8,000 (가격은 판매처 별로 상이할 수 있습니다)',
    ingredients: '멥쌀(국내산),누룩,효모,정제수',
    manufacturer: '농업회사법인 (주)도깨비양조장',
    owner: '김진경',
    lat: '128.384737609872',
    lng: '37.0263880662162',
    province: '충북',
    city: '단양군',
    phone: '070-4133-2030',
  },
];

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

const Map = () => {
  const mapRef = useRef<MapRef>(null);
  const [data, setData] = useState({
    type: 'FeatureCollection',
    features: records.map((record) => ({
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

  useEffect(() => {}, [mapRef]);

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
