import React from 'react';
import { Section } from './styles';

interface Props {
  scrollValue: number;
}

const Section3 = ({ scrollValue }: Props) => {
  return (
    <Section>
      <div className="card card1">
        <p className="card-message card1-message">muyaho</p>
        <div className="card-image card1-image"></div>
      </div>
    </Section>
  );
};

export default Section3;
