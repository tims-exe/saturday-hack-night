import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { LandingPage } from './pages/LandingPage';
import { ExpiredFood } from './pages/ExpiredFood';
import NonExpired from './pages/NonExpired/NonExpired'
import { IndustrialSymbiosis } from './pages/IndustrialSymbiosis';
import { CompanyServices } from './pages/CompanyServices';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<LandingPage/>} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/foodsurplus/expired" element={<ExpiredFood/>}/>
        <Route path="/foodsurplus/nonexpired" element={<NonExpired/>}/>
        <Route path="/industrialsymbiosis" element={<IndustrialSymbiosis/>}/>
        <Route path="/companyservices" element={<CompanyServices/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App


/*

<Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />


const SurploItems = [
  {
    id: 1,
    title: "Bread",
    description: "Sliced bread with mold",
    quantity: "1 packet",
    price : 20.0,
    expired: true,
  },
  {
    id: 2,
    title: "Left Over Rice",
    description: "Left Over Rice - past its prime (for informational purposes only)",
    quantity: "15 plates",
    price : 15,
    expired: true,
  },
  {
    id: 3,
    title: "Banquet Cuisune",
    description: "Delicious and mouthwatering dishes for your event",
    quantity: "50 plates",
    price : 1105,
    expired: false,
  },
  {
    id: 3,
    title: "Party Buffet",
    description: "Mouthwatering and delectable options for your party",
    quantity: "85 plates",
    price : 800,
    expired: false,
  },
];
*/