import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./LayOut";
import WebsiteAb from "./pages/About/WebsiteAb";
import WebsiteCon from "./pages/Contact/WebsiteCon";
import ServiceDetail from "./pages/Services/ServiceDetail";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<WebsiteAb />} />
          <Route path="contact" element={<WebsiteCon />} />
          <Route path="service/:id" element={<ServiceDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
