import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Css from "./pages/Css";
import Javascript from "./pages/Javascript";
import ReactJS from "./pages/ReactJS";
import Question from "./components/Question/Question";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/css" />} />
        <Route path="/css" element={<Css />} />
        <Route path="/javascript" element={<Javascript />} />
        <Route path="/react" element={<ReactJS />} />
        <Route path="/#:id" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
