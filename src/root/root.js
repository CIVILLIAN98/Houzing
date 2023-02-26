import React, { Component } from "react";
import Navbar from "../components/navbar";
import Home from "../components/home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

class Root extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<h1>Home</h1>} />
            <Route path="/properties" element={<h1>Properties</h1>} />
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>
        <Navbar />
        <Home />
      </>
    );
  }
}
export default Root;
