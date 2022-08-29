import Layout from '@components/layout';
import {
  ContentsWrapper,
  FilterButton,
  FilterImg,
  FilterWrapper,
  Wrapper,
} from '@components/domain/myExperiences/styles';
import Item from '@components/domain/myExperiences/item';
import { useState } from 'react';
import Button from '@components/domain/myExperiences/button';

const MyExperiences = () => {
  const drinkData = ['soju', 'fruit', 'mak', 'etc', 'all'];

  return (
    <Layout>
      <Wrapper>
        <FilterWrapper>
          {drinkData.map((drink) => (
            <Button key={drink} drink={drink} />
          ))}
        </FilterWrapper>
        <ContentsWrapper>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </ContentsWrapper>
      </Wrapper>
    </Layout>
  );
};
export default MyExperiences;
