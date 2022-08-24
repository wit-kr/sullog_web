import { useRouter } from 'next/router';
import styled from 'styled-components';
import { AlcoholType } from '../../../../types/sullog.interface';

interface AlcoholProps {
  alchol: AlcoholType;
}

const AlcoholContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: #f9f9f9;
  border-radius: 15px;
  padding: 1.6rem 2rem 2.5rem 2rem;
  cursor: pointer;
`;

const AlcoholInfoHeader = styled.span`
  display: flex;
  gap: 6px;
`;

const AlcoholInfoText = styled.span`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: rgba(80, 80, 80, 0.6);
`;

const AlcoholNameText = styled.span`
  font-weight: 500;
  font-size: 2rem;
  line-height: 1.6rem;
  color: #505050;
`;

const Alcohol = ({ alchol }: AlcoholProps) => {
  const router = useRouter();

  const handleOnClickAlcohol = () => {
    router.push(`/create/write/${alchol.seq}`);
  };

  return (
    <AlcoholContainer onClick={handleOnClickAlcohol}>
      <AlcoholInfoHeader>
        <AlcoholInfoText>{alchol.type}</AlcoholInfoText>
        <AlcoholInfoText>{alchol.manufacturer}</AlcoholInfoText>
      </AlcoholInfoHeader>
      <AlcoholNameText>{alchol.name}</AlcoholNameText>
    </AlcoholContainer>
  );
};

export default Alcohol;
