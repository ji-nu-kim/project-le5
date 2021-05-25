import Section1 from '@components/Section1';
import Section2 from '@components/Section2';
import Section3 from '@components/Section3';
import React, { useEffect, useState } from 'react';
import { Content } from './styles';

interface Props {
  currentY: number;
  scrollPercent: number;
}

const Main = ({ currentY, scrollPercent }: Props) => {
  return (
    <Content>
      <Section1 scrollPercent={scrollPercent} />
      <Section2 scrollPercent={scrollPercent} />
      <Section3 scrollPercent={scrollPercent} />
    </Content>
  );
};

export default Main;
