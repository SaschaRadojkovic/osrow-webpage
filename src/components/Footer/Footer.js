import styled from "styled-components";

const StyledFooter = styled.footer`
  margin-bottom: 0;

  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background: black;
  color: white;
`;
export default function Footer() {
  return <StyledFooter>PAGE FOOTER</StyledFooter>;
}
