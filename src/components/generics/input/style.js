import styled from "styled-components";

// const GetType = ({ type }) => {
//   switch (type) {
//     case "dark": {
//       return {
//         background: "transparent",
//         color: "white",
//         border: "1px solid rgba(255, 255, 255, 1)",
//       };
//     }
//     case "light": {
//       return {
//         background: "transparent",
//         color: "black",
//         border: "1px solid #E6E9EC",
//       };
//     }
//     case "blue": {
//       return {
//         background: "#0061DF",
//         color: "#ffff",
//         border: "1px solid #0061DF",
//       };
//     }

//     default:
//       return {
//         background: "#fffff",
//         color: "black",
//         border: "1px solid rgba(255, 255, 255, 1)",
//       };
//   }
// };

const Container = styled.input`
  min-width: 120px;
  border-radius: 2px;
  outline: none;
  font-size: 1.5rem;
  color: black;
  line-height: 20px;
  border: 1px solid #e6e9ec;
  height: ${({ height }) => (height ? `${height}` : "44px")};
  width: ${({ width }) => (width ? `${width}` : "100%")};
`;

export { Container };
