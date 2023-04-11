import { AntTabs, Container } from "./style";
import Signin from "../Signin";
import Signup from "../Signup";

export const Register = () => {
  return (
    <Container>
      <AntTabs
        defaultActiveKey="1"
        items={[
          {
            label: `Sign up`,
            key: "1",
            children: <Signup />,
          },
          {
            label: `Sign in`,
            key: "2",
            children: <Signin />,
          },
        ]}
      />
    </Container>
  );
};

export default Register;
