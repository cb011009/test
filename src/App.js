import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HospitalDashboard from "./pages/HospitalDashboard";
import BloodStorage from "./pages/BloodStorage";
import SearchBloodbank from "./pages/SearchBloodbank";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HospitalDashboard/>} />
          <Route path="bloodStorage" element={<BloodStorage />} />
          <Route path="searchBloodbank" element={<SearchBloodbank/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
