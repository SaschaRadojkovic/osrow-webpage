import styled from "styled-components";

const StyledH1 = styled.h1`
  margin: 0;

  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background: black;
  color: white;
`;
export default function Header() {
  return <StyledH1>PAGE HEADER</StyledH1>;
}
