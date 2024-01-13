import React from 'react';
import { SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <div>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  );
};
