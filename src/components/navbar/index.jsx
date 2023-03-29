import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../../utils/navbar";
import Button from "../generics/Button";

import { Container, Main, Wrapper, Section, Link } from "./style";
import Filter from "../filter/index";
import Footer from "../Footer";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo>
            <Section.LogoImg />
            <h3>Houzing</h3>
          </Section>
          <Section>
            {NavBar.map((link, index) => {
              return (
                !link.hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={link.path}
                  >
                    {link.title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            <Button onClick={() => navigate("/login")} type={"dark"}>
              Log in
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  );
};
export default Navbar;
