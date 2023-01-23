import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
