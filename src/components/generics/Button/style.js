import styled from "styled-components";

const GetType = ({ type }) => {
  switch (type) {
    case "dark": {
      return {
        background: "transparent",
        color: "white",
        border: "1px solid rgba(255, 255, 255, 1)",
      };
    }
    case "light": {
      return {
        background: "transparent",
        color: "black",
        border: "1px solid #E6E9EC",
      };
    }
    case "blue": {
      return {
        background: "#0061DF",
        color: "#ffff",
        border: "1px solid #0061DF",
      };
    }

    default:
      return {
        background: "#fffff",
        color: "black",
        border: "1px solid rgba(255, 255, 255, 1)",
      };
  }
};

const Container = styled.button`
  min-width: 120px;
  height: 44px;
  padding: 12px 40px;
  border: 1px solid #ffffff;
  border-radius: 2px;
  ${GetType}
  height: auto;
  :active {
    transform: scale(0.9);
  }
  height: ${({ height }) => (height ? `${height}` : "44px")};
  width: ${({ width }) => (width ? `${width}` : "128px")};
`;

export { Container };
