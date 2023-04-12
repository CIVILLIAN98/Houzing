import { Select } from "antd";
import styled from "styled-components";
import { ReactComponent as del } from "../../assets/icons/delete.svg";
const Wrapper = styled.div`
  padding: var(--padding);
  max-width: 1440px;
  width: 100%;
  margin: auto;
  margin-top: 50px;
  min-height: 600px;
`;
const MenuWrapper = styled.div`
  width: 100%;
  padding: 30px;
  gap: 20px;
  background: white;
  border: 1px solid #e6e9ec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Section = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (flex ? "column" : "row")};
  justify-content: ${({ jc }) => (jc ? "space-between" : "flex-start")};
  align-items: ${({ c }) => (c ? "flex-start" : "center")};
  gap: 20px;
  margin-bottom: 20px;
  width: 100%;
  background-color: ${({ test }) => (test ? "red" : "transparent")};
`;
const SelectAnt = styled(Select)`
  min-width: 200px;
  width: 100%;
  max-width: 200px;
  .ant-select-selector {
    height: 44px !important;
  }
  .ant-select-selection-item {
    display: flex !important;
    align-items: center !important;
  }
`;
const Delete = styled(del)`
  :active {
    transform: scale(0.8);
  }
`;
export { Wrapper, MenuWrapper, Section, SelectAnt, Delete };
