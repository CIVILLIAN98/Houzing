import React from "react";
import { Container } from "./style";
import Button from "../../components/generics/Button";
import Input from "../../components/generics/input";
import useRequest from "../../hooks/useRequest";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
const Signin = () => {
  const request = useRequest();
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };
  const info = () => {
    message.info("Successfully logged in ");
  };

  const onSubmit = async () => {
    request({
      url: `/public/auth/login`,
      method: "POST",
      body,
      me: true,
    }).then((res) => {
      if (res?.authenticationToken) {
        navigate("/home");
        localStorage.setItem("token", res?.authenticationToken);
        info();
      }
    });
  };

  return (
    <Container>
      <Container.Header>Sign in</Container.Header>
      <Input wr={"100%"} onChange={onChange} placeholder="email" />
      <Input wr={"100%"} onChange={onChange} placeholder="password" />
      <Button onClick={onSubmit} width="100%" type={"blue"}>
        Login
      </Button>
    </Container>
  );
};
export default Signin;
