import React, { Component } from "react";
import Navbar from "../components/navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { navbar } from "../utils/navbar";

class Root extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route element={<Navbar />}>
              {navbar.map((val) => {
                return (
                  <Route key={val.id} path={val.title} element={val.element} />
                );
              })}
            </Route>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
export default Root;
