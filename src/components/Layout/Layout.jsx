// import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BsSun, BsMoon } from 'react-icons/bs';

import { Header, Sidebar } from 'components';

import { selectTheme } from 'redux/global/global-selectors';
import { toggleThemeTitle } from 'redux/global/globalSlice';

import { theme } from 'styles/theme';
import { colors } from 'styles/colors';
import GlobalStyles from 'styles/GlobalStyles/GlobalStyles.styled';
import { ThemeButton } from './Layout.styled';

export default function Layout() {
  const themeTitle = useSelector(selectTheme);
  const normalizedTheme = { ...theme, ...colors[themeTitle] };

  const dispatch = useDispatch();

  const handleThemeChange = e => {
    dispatch(toggleThemeTitle(themeTitle));
  };

  return (
    <ThemeProvider theme={normalizedTheme}>
      <GlobalStyles />
      <Header />
      <Sidebar />
      <ThemeButton onClick={handleThemeChange}>
        {themeTitle === 'light' ? <BsMoon size={24} /> : <BsSun size={24} />}
      </ThemeButton>

      <main>
        <Outlet />
      </main>

      <div
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          backdropFilter: 'blur(25px)',
          zIndex: -1,
        }}
      />
    </ThemeProvider>
  );
}
