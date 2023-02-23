import React, { Component } from "react";
import { Navbar } from "../components/navbar";
import { Home } from "../components/navbar/home";

class Root extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
      </>
    );
  }
}
export default Root;
