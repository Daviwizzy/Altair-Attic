import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./LayOut";
import WebsiteAb from "./pages/About/WebsiteAb";
import ServiceDetail from "./pages/Services/ServiceDetail";
import Home from "./pages/Home";
import Form from "./pages/Form/Form";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<WebsiteAb />} />
        <Route path="/Form" element={<Form/>}/>
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
