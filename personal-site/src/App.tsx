import React, { Suspense, lazy } from 'react';
import './static/css/App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layout/main';

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const Index = lazy(() => import('./pages/LandingPage'));
// const Contact = lazy(() => import('./pages/Contact'));
// const Index = lazy(() => import('./pages/Index'));
// const NotFound = lazy(() => import('./pages/NotFound'));
// const Projects = lazy(() => import('./pages/Projects'));
// const Resume = lazy(() => import('./pages/Resume'));
// const Stats = lazy(() => import('./pages/Stats'));


const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const App: React.FC = () => {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
  );
}

export default App;
