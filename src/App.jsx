import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Header } from './components';

const Home = lazy(() => import("pages/Home"));
const Rates = lazy(() => import("pages/Rates"));


export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header/>}>
      <Route index element={<Home />} />
        <Route path="/rates" element={<Rates />} />
        <Route path='*' element={<Navigate to='/'/>} />
      </Route>     
    </Routes>);
};
