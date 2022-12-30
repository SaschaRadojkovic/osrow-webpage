import { useState } from "react";
import styled from "styled-components";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/Page3";
import { Page4 } from "../Pages/Page4";

const StyledNav = styled.nav``;
const StyledButton = styled.button`
  gap: 10px;

  width: 25%;
  color: black;
  background: lightgrey;
  border: none;

  transition: background 0.5s, color 0.5s;
  &:hover {
    color: white;
    background: grey;
  }
`;

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState(1);

  function handlePageChange(page) {
    setCurrentPage(page);
  }
  return (
    <StyledNav>
      <StyledButton
        name="page1"
        type="button"
        onClick={() => handlePageChange(1)}
      >
        Go to page 1
      </StyledButton>
      <StyledButton
        name="page2"
        type="button"
        onClick={() => handlePageChange(2)}
      >
        Go to page 2
      </StyledButton>
      <StyledButton
        name="page3"
        type="button"
        onClick={() => handlePageChange(3)}
      >
        Go to page 3
      </StyledButton>
      <StyledButton
        name="page4"
        type="button"
        onClick={() => handlePageChange(4)}
      >
        Go to page 4
      </StyledButton>
      {currentPage === 1 && <Page1 />}
      {currentPage === 2 && <Page2 />}
      {currentPage === 3 && <Page3 />}
      {currentPage === 4 && <Page4 />}
    </StyledNav>
  );
}
