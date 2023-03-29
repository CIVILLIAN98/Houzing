import React, { Component } from "react";
import Navbar from "../components/navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../utils/navbar";

class Root extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route element={<Navbar />}>
              {NavBar.map(({ path, element, id }) => {
                return <Route key={id} path={path} element={element} />;
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
