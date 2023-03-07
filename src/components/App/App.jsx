import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Layout from 'components/Layout/Layout';
import { routes } from 'routes';
import { getUserInfoRequest } from 'redux/auth/auth-operations';

import { colors } from 'styles/colors/index';
import { theme } from 'styles/theme';
import GlobalStyles from 'styles/GlobalStyles/GlobalStyles.styled';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CurrencyPage = lazy(() => import('pages/CurrencyPage/CurrencyPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const StatisticsPage = lazy(() =>
  import('pages/StatisticsPage/StatisticsPage')
);

console.log(window.innerWidth);

export function App() {
  const normalizedTheme = { ...theme, colors: colors['dark'] };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfoRequest());
  }, [dispatch]);

  return (
    <ThemeProvider theme={normalizedTheme}>
      <GlobalStyles />
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.CURRENCY_PAGE} element={<CurrencyPage />}></Route>
          <Route path={routes.REGISTER_PAGE} element={<RegisterPage />} />
          <Route path={routes.LOGIN_PAGE} element={<LoginPage />} />
          <Route path={routes.STATISTICS_PAGE} element={<StatisticsPage />} />
          <Route path="*" element={<Navigate to={routes.HOME} />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
