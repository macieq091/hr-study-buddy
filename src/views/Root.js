import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/globalStyles';
import { theme } from '../assets/styles/theme';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DashBoard from './Dashboard';
import AddUser from './AddUser';
import MainTemplate from 'components/templates/MainTemplates/MainTemplates';
import UsersProvider from 'providers/UsersProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <UsersProvider>
            <Wrapper>
              <Routes>
                <Route path="/add-user" element={<AddUser />} />
                <Route path="/" element={<DashBoard />} />
              </Routes>
            </Wrapper>
          </UsersProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
