import styled from "styled-components";

const StyledH1 = styled.h1`
  z-index: 2;
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;

  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background: black;
  color: white;
`;
export default function Header() {
  return <StyledH1>PAGE HEADER</StyledH1>;
}
