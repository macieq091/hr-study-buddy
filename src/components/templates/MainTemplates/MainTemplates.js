import React from 'react';
import Navigation from '../../organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplates.styles';
import { SearchBar } from '../../organisms/SearchBar/SearchBar';
import NewsSection from '../../templates/NewsSection/NewsSection';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      <NewsSection />
      {children}
     
    </Wrapper>
  );
};

export default MainTemplate;
