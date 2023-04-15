import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../../utils/navbar";
import Button from "../generics/Button";
import { Dropdown } from "antd";
import { Container, Main, Wrapper, Section, Link, ProfileMenu } from "./style";
import Filter from "../filter/index";
import Footer from "../Footer";

const Navbar = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  const onClickProfile = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "logout") {
      window.localStorage.removeItem("token");
      navigate("/home");
    } else if (name === "myproperties") {
      navigate("/myproperties");
    } else if (name === "myfavorite") {
      navigate("/myfavorite");
    }
  };
  const Menu = (
    <ProfileMenu>
      <ProfileMenu.Item
        onClick={onClickProfile}
        data-name="myproperties"
        className="subTitle"
      >
        My Properties
      </ProfileMenu.Item>
      <ProfileMenu.Item
        onClick={onClickProfile}
        data-name="myfavorite"
        className="subTitle"
      >
        Favourites
      </ProfileMenu.Item>
      <ProfileMenu.Item
        onClick={onClickProfile}
        data-name="logout"
        className="subTitle"
      >
        Log Out
      </ProfileMenu.Item>
    </ProfileMenu>
  );

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
            {token ? (
              <Dropdown
                overlay={Menu}
                placement="bottom"
                arrow={{ pointAtCenter: true }}
                trigger="click"
              >
                <Button type={"dark"}>Profile</Button>
              </Dropdown>
            ) : (
              <Button onClick={() => navigate("/register")} type={"dark"}>
                Log in
              </Button>
            )}
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
