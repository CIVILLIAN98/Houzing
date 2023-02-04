import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../Components/navbar";
import { navbar } from "../utilities/navbar";

class Root extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route element={<Navbar />}>
            {navbar.map((value) => (
              <Route key={value.id} path={value.path} element={value.element} />
            ))}
            <Route path="/" element={<Navigate to={"/home"} />} />
          </Route>
          <Route path="*" element={<h1>404 not Found</h1>} />
        </Routes>
      </div>
    );
  }
}
export default Root;
