import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { useMemo } from 'react';
import { themeSettings } from './theme';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
const App = () => {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() =>
    createTheme(themeSettings(mode))
    , [mode]);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/' exact element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile/:userId' element={<Profile />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App