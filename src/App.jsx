import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "./LayOut";
import loadingGif from '/loading.gif';
import SerW from "./pages/Services/SerW";
import useAnalytics from './hooks/useAnalytics';

const WebsiteAb = lazy(() => import("./pages/About/WebsiteAb"));
const ServiceDetail = lazy(() => import("./pages/Services/ServiceDetail"));
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); 
  }, []);

  useAnalytics(); // Call hook directly in the component

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <img src={loadingGif} alt="Loading..." style={{ width: '400px', height: '400px' }} />
      </div>
    );
  }

  return (
    <HelmetProvider>
      <Suspense fallback={
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <img src={loadingGif} alt="Loading..." style={{ width: '400px', height: '400px' }} />
        </div>
      }>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Layout />}>
            <Route path="about" element={<WebsiteAb />} />
            <Route path="contact" element={<Contact />} />
            <Route path=":url" element={<SerW />} />
          </Route>
        </Routes>
      </Suspense>
    </HelmetProvider>
  );
}
