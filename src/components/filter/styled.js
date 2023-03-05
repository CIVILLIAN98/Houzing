import styled from "styled-components";

import { ReactComponent as advanced } from "../../assets/icons/setting.svg";
import { ReactComponent as houses } from "../../assets/icons/houses.svg";
const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: var(--padding);
  display: flex;
  gap: 20px;
  margin: 10px auto;
`;

const Icons = styled.div``;
Icons.Houses = styled(houses)`
  margin-right: 8px;
  
`;
Icons.Advanced = styled(advanced)`
  margin-right: 8px;
`;

export { Container, Icons };
