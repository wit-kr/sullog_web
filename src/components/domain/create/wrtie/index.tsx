/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable function-paren-newline */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
import NavigationHeader from '@components/layout/header/navigationHeader';
import { useRouter } from 'next/router';
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { useImageUpload } from 'hooks/useImageUpload';
import { Rating } from 'react-simple-star-rating';
import { useAuth } from '@components/shared/Auth/AuthProvider';
import { useRecordUpload } from 'hooks/useRecordUpload';
import Flavor from './Flavor';
import DetailFlavor from './DetailFlavor';
import 'swiper/css';

export interface WriteProps {
  id: string;
  name: string;
  type: string;
  manufacturer: string;
  abv: string;
  location: string;
}

const abvs = ['연하다', '보통이다', '독하다'];
const flowers = ['국화', '매화', '아카시아', '연꽃', '많으면', '아래줄로'];
const fruits = [
  '감귤',
  '딸기',
  '매실',
  '멜론',
  '바나나',
  '배',
  '복숭아',
  '사과',
  '산딸기',
  '살구',
  '유자',
  '자두',
  '참외',
  '파인애플',
];
const grains = [
  '감자',
  '갓 지은 밥',
  '고구마',
  '곡물가루',
  '누룽지',
  '밀',
  '생쌀',
  '옥수수',
];
const nuts = ['땅콩', '밤', '아몬드', '잣'];
const sweets = ['꿀', '엿기름', '조청', '캬라멜'];
const dairies = ['버터', '요거트', '우유', '치즈'];

const getToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = `0${1 + date.getMonth()}`.slice(-2);
  const day = `0${date.getDate()}`.slice(-2);

  return `${year}.${month}.${day}`;
};

const Write = (props: WriteProps) => {
  const router = useRouter();
  const { user } = useAuth();

  const [photos, setPhotos] = useState<FileList>();
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  // 별점
  const [rating, setRating] = useState(100);
  // 도수
  const [abv, setAbv] = useState(abvs[1]);
  // 플레이버
  const [incense, setIncense] = useState(2);
  const [taste, setTaste] = useState(2);
  const [texture, setTexture] = useState(2);
  // 상세 플레이버
  const [flower, setFlower] = useState(flowers[0]);
  const [fruit, setFruit] = useState(fruits[0]);
  const [grain, setGrain] = useState(grains[0]);
  const [nut, setNut] = useState(nuts[0]);
  const [sweet, setSweet] = useState(sweets[0]);
  const [dairy, setDairy] = useState(dairies[0]);
  // 상세 내용
  const [etc, setEtc] = useState('');

  const imageUploadMutation = useImageUpload();
  const recordUploadMutation = useRecordUpload();

  useEffect(() => {
    if (photos) {
      imageUploadMutation.mutate({
        files: photos,
        user_seq: user?.seq.toString() as string,
        alcohol_seq: props.id.toString(),
      });
    }
  }, [photos]);

  const encodeFileToBase64 = (image: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (event: any) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
    });

  const onChangeImageInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const { files } = e.target;

      Array.from(files).forEach((image) => {
        encodeFileToBase64(image).then((data: string) =>
          setPreviewImages((prev: string[]) => [...prev, data])
        );
      });

      setPhotos(files);
    }
  };

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleDegree = (e: any) => {
    if (e.target.checked) {
      setAbv(e.target.id);
    }
  };

  return (
    <WriterContainer>
      <NavigationHeader
        canGoBack
        title="게시글"
        headerRight={{
          label: '완료',
          onClick: async () => {
            if (previewImages.length) {
              recordUploadMutation.mutate({
                user_seq: user?.seq as number,
                alchol_seq: Number(props.id),
                star: rating,
                abv,
                incense: abv.toString(),
                taste: taste.toString(),
                texture: texture.toString(),
                time: new Date().toDateString(),
                flower,
                fruit,
                grain,
                nut,
                sweetness: sweet,
                dairy,
                etc,
              });
              router.push({
                pathname: '/experience/[userSeq]/[alcholSeq]',
                query: {
                  userSeq: user?.seq as number,
                  alcholSeq: Number(props.id),
                },
              });
            }
          },
          disabled: !(previewImages.length > 0),
        }}
      />
      <Swiper spaceBetween={0} slidesPerView={1}>
        {previewImages.length ? (
          previewImages.map((image: string) => (
            <SwiperSlide key={image}>
              <SlideImage src={image} />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <ImageIcon src="/image/icon/image.svg" />
            <ImageLabel htmlFor="imageUpload">
              <ImageUploadButton src="/image/icon/upload.svg" />
              <input
                id="imageUpload"
                type="file"
                multiple
                accept="image/jpg,impge/png,image/jpeg,image/gif"
                onChange={(e) => onChangeImageInput(e)}
                style={{ display: 'none' }}
              />
            </ImageLabel>
            <EmptySlideImage />
          </SwiperSlide>
        )}
      </Swiper>
      <AlcoholInfoContainer>
        <AlcoholFieldContainer>
          <AlcoholFieldRow>
            <AlcoholField size="wide">
              <AlcoholFieldLabel>술이름</AlcoholFieldLabel>
              <AlcoholFieldTextValue>{props.name}</AlcoholFieldTextValue>
            </AlcoholField>
            <AlcoholField size="narrow">
              <AlcoholFieldLabel>주종</AlcoholFieldLabel>
              <AlcoholFieldTextValue>{props.type}</AlcoholFieldTextValue>
            </AlcoholField>
          </AlcoholFieldRow>
          <AlcoholFieldRow>
            <AlcoholField size="wide">
              <AlcoholFieldLabel>브랜드</AlcoholFieldLabel>
              <AlcoholFieldTextValue>
                {props.manufacturer}
              </AlcoholFieldTextValue>
            </AlcoholField>
            <AlcoholField size="narrow">
              <AlcoholFieldLabel>날짜</AlcoholFieldLabel>
              <AlcoholFieldTextValue>{getToday()}</AlcoholFieldTextValue>
            </AlcoholField>
          </AlcoholFieldRow>
          <AlcoholFieldRow>
            <AlcoholField size="fill">
              <AlcoholFieldLabel>지역</AlcoholFieldLabel>
              <AlcoholFieldTextValue>{props.location}</AlcoholFieldTextValue>
            </AlcoholField>
          </AlcoholFieldRow>
        </AlcoholFieldContainer>
        <AlcholInputContainer>
          <AlcoholFieldLabel>별점</AlcoholFieldLabel>
          <AlcoholRatingContainer>
            <AlcoholFieldCTA>드래그해서 별점을 입력해보세요.</AlcoholFieldCTA>
            <Rating
              onClick={handleRating}
              ratingValue={rating}
              fillColor="#3E14B4"
              emptyColor="#D4D4D4"
              size={24}
            />
          </AlcoholRatingContainer>
        </AlcholInputContainer>
        <AlcholInputContainer>
          <AlcoholFieldLabel>도수</AlcoholFieldLabel>
          <AlcoholDegreeButtonContainer>
            <AlcoholFieldCTA>내가 마신 술은 실제 도수보다</AlcoholFieldCTA>
            <AlcoholDegreeButtons>
              {abvs.map((value, index: number) => (
                <AlcoholDegreeLabel
                  htmlFor={index.toString()}
                  selected={abv === value}
                  onClick={() => setAbv(value)}
                >
                  <AlcoholDegreeButton
                    type="radio"
                    id={value}
                    name="degree"
                    onChange={handleDegree}
                    value={index.toString()}
                  />
                  <AlcoholDegreeText selected={abv === value}>
                    {value}
                  </AlcoholDegreeText>
                </AlcoholDegreeLabel>
              ))}
            </AlcoholDegreeButtons>
            <AlcoholDegree>
              실제 도수는 {props.abv}
              입니다.
            </AlcoholDegree>
          </AlcoholDegreeButtonContainer>
        </AlcholInputContainer>
        <AlcholInputContainer>
          <AlcoholFieldLabel>플레이버</AlcoholFieldLabel>
          <AlcoholFlavorContainer>
            <Flavor
              label="향"
              minLabel="별로다"
              maxLabel="좋다"
              data={incense}
              setData={setIncense}
            />
            <Flavor
              label="맛"
              minLabel="달다"
              maxLabel="쓰다"
              data={taste}
              setData={setTaste}
            />
            <Flavor
              label="감촉"
              minLabel="부드러운"
              maxLabel="쓰다"
              data={texture}
              setData={setTexture}
            />
          </AlcoholFlavorContainer>
        </AlcholInputContainer>
        <AlcholInputContainer>
          <AlcoholFieldLabel>상세 플레이버</AlcoholFieldLabel>
          <DetailFlavors>
            <DetailFlavor
              category="꽃"
              items={flowers}
              state={flower}
              setState={setFlower}
            />
            <DetailFlavor
              category="과일"
              items={fruits}
              state={fruit}
              setState={setFruit}
            />
            <DetailFlavor
              category="곡물"
              items={grains}
              state={grain}
              setState={setGrain}
            />
            <DetailFlavor
              category="견과류"
              items={nuts}
              state={nut}
              setState={setNut}
            />
            <DetailFlavor
              category="단내"
              items={sweets}
              state={sweet}
              setState={setSweet}
            />
            <DetailFlavor
              category="유제품"
              items={dairies}
              state={dairy}
              setState={setDairy}
            />
          </DetailFlavors>
        </AlcholInputContainer>
        <AlcholInputContainer>
          <AlcoholFieldLabel>상세 내용</AlcoholFieldLabel>
          <AlcoholEtc
            rows={10}
            value={etc}
            onChange={(e) => setEtc(e.target.value)}
          />
        </AlcholInputContainer>
      </AlcoholInfoContainer>
    </WriterContainer>
  );
};

export default Write;

const WriterContainer = styled.div``;

const SlideImage = styled.img`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 1;
`;

const EmptySlideImage = styled.div`
  object-fit: cover;
  aspect-ratio: 1;
  background-color: #e8e8e8;
`;

const ImageLabel = styled.label`
  cursor: pointer;
  position: absolute;
  right: 2.4rem;
  bottom: 2.4rem;
`;

const ImageUploadButton = styled.img``;

const ImageIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const AlcoholInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  padding: 2.8rem 3rem;
  background-color: #ffffff;
`;

const AlcoholFieldContainer = styled.div`
  margin-bottom: 1rem;
`;

const AlcoholFieldRow = styled.div`
  display: flex;
  gap: 10%;
  margin-bottom: 1.8rem;
`;

const AlcoholField = styled.div<{ size: 'fill' | 'wide' | 'narrow' }>`
  display: flex;
  flex-direction: column;
  width: ${({ size }) =>
    size === 'fill' ? '100%' : size === 'wide' ? '60%' : '30%'};
`; // narrow(0.3), wide(0.6)

const AlcoholFieldLabel = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.6rem;
  color: #c0c0c0;
  margin-bottom: 1.3rem;
`; // 술이름, 주종, 브랜드, 날짜, 지역

const AlcoholFieldTextValue = styled.span`
  padding-bottom: 0.7rem;
  border-bottom: 0.1rem solid #ebebeb;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.6rem;
  color: #000000;
`;

const AlcoholFieldCTA = styled.span`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #a4a4a4;
  margin-bottom: 0.8rem;
`;

const AlcholInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// 별점
const AlcoholRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0 1.4rem 2rem;
  background-color: #f9f9f9;
  border-radius: 1rem;
`;

// 도수
const AlcoholDegreeButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0 1.4rem 2rem;
  background-color: #f9f9f9;
  border-radius: 1rem;
`;

const AlcoholDegreeButtons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 1.1rem;
`;

const AlcoholDegreeLabel = styled.label<{ selected: boolean }>`
  padding: 4px 8px;
  background-color: ${({ selected }) => (selected ? '#3E14B4' : '#eeeeee')};
  border-radius: 8px;
  cursor: pointer;
`;

const AlcoholDegreeButton = styled.input``;

const AlcoholDegreeText = styled.span<{ selected: boolean }>`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  color: ${({ selected }) => (selected ? '#ffffff' : '#595959')};
`;

const AlcoholDegree = styled.span`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6rem;
  color: #b1b1b1;
`;

const AlcoholFlavorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2.7rem;
  gap: 0.5rem;
  background-color: #f9f9f9;
  border-radius: 1rem;
`;

// 상세 플레이버
const DetailFlavors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

// 상세 내용
const AlcoholEtc = styled.textarea`
  border: 1px solid #d5d5d5;
  border-radius: 1rem;
  resize: none;
  padding: 1.2rem 1.7rem;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: #000000;
`;
