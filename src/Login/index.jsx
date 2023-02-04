import React, { useRef } from "react";
import { Container } from "./style";

const Login = () => {
  const usernameref = useRef();
  const passwordref = useRef();

  const onLogin = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: usernameref.current.value,
        password: passwordref.current.value,
        // expiresInMins: 60, // optional
        // "hbingley1"
        // "CQutx25i8r"
      }),
    })
      .then((res) => res.json())
      .then((res) => localStorage.setItem("token", res.token));
    console.log("hbingley1", "CQutx25i8r");
  };
  return (
    <Container>
      <Container.Header>Login</Container.Header>
      <input
        ref={usernameref}
        type="text"
        placeholder="login - hbingley1"
        style={{ margin: "10px 0" }}
      />
      <input
        ref={passwordref}
        type="text"
        placeholder="parol - CQutx25i8r"
        style={{ margin: "10px 0" }}
      />
      <button onClick={onLogin}>Login</button>
    </Container>
  );
};
export default Login;
