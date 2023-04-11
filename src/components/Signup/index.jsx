import React from "react";
import { Container } from "./style";
import Button from "../generics/Button";
import Input from "../generics/input";
import useRequest from "../../hooks/useRequest";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
const Signup = () => {
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
    message.info("Successfully Signed up");
  };
  const deInfo = () => {
    message.info("Failed to Signed up");
  };

  const onSubmit = async () => {
    request({
      url: `/public/auth/register`,
      method: "POST",
      body,
      me: true,
    }).then((res) => {
      if (res) {
        navigate("/login");
        info();
      } else {
        deInfo();
      }
    });
  };

  return (
    <Container>
      <Container.Header>Sign up</Container.Header>
      <Input
        margin={"10px 0"}
        wr={"100%"}
        onChange={onChange}
        placeholder="email"
      />
      <Input
        margin={"10px 0"}
        wr={"100%"}
        onChange={onChange}
        placeholder="firstname"
      />
      <Input
        margin={"10px 0"}
        wr={"100%"}
        onChange={onChange}
        placeholder="lastname"
      />
      <Input
        margin={"10px 0"}
        wr={"100%"}
        onChange={onChange}
        placeholder="password"
      />
      <Button onClick={onSubmit} width="100%" type={"blue"}>
        Sign up
      </Button>
    </Container>
  );
};
export default Signup;
