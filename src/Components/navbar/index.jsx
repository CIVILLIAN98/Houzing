import React from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { Footer } from "../../Footer";
import { navbar } from "../../utilities/navbar";
import { Container, Wrapper, Navlinks } from "./style";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Navlinks>
          {navbar.map(
            (vl) =>
              !vl.hidden && (
                <li key={vl.id}>
                  <Link to={vl.path}>{vl.title}</Link>
                </li>
              )
          )}
          <button onClick={() => navigate("/login")}>Login</button>
        </Navlinks>
      </Wrapper>
      <Wrapper style={{ display: "flex", flexDirection: "column" }}>
        <Outlet />
        <Footer />
      </Wrapper>
    </Container>
  );
};
export default Navbar;
