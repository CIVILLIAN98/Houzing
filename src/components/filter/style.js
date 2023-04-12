import styled from "styled-components";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { ReactComponent as advanced } from "../../assets/icons/setting.svg";
import { ReactComponent as houses } from "../../assets/icons/houses.svg";
import { Select } from "antd";

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

Icons.Search = styled(search)`
  margin-right: 8px;
`;
Icons.Filter = styled(advanced)`
  margin-right: 8px;
`;
Icons.Houses = styled(houses)`
  margin-right: 8px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  display: flex;
  justify-content: flex-start !important;
  gap: 20px;
  margin-bottom: 20px;
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

export { Container, Icons, MenuWrapper, Section, SelectAnt };
