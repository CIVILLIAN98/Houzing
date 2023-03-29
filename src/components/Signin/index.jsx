import React from "react";
import { Container, Forgot, InputCon } from "./style";
import Button from "../../components/generics/Button";
import Input from "../../components/generics/input";
const Signin = () => {
  return (
    <Container>
      <Container.Header>Sign in</Container.Header>
      <InputCon borderBottom={`2px solid #0061DF`}>
        <InputCon.Logintext>Login</InputCon.Logintext>
        <Input
          height={`30px`}
          padding={`0`}
          border={"none"}
          placeholder={"Name"}
        />
      </InputCon>

      <InputCon>
        <div style={{ width: "100%" }}>
          <Input
            height={`30px`}
            padding={`0`}
            border={"none"}
            placeholder={"Password"}
            borderBottom={"2px solid rgba(230, 233, 236, 1)"}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", marginTop: "16px", gap: "11px" }}>
            <input type="checkbox" style={{ width: "18px", height: "18px" }} />
            <InputCon.Passwordtext>Remember me</InputCon.Passwordtext>
          </div>
          <Forgot>Forgot</Forgot>
        </div>
      </InputCon>

      <Button width="100%" type={"blue"}>
        Login
      </Button>
    </Container>
  );
};
export default Signin;
