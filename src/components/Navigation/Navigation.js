import { useState } from "react";
import styled from "styled-components";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/Page3";
import { Page4 } from "../Pages/Page4";

// const StyledContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   overflow: auto;
// `;

const StyledNav = styled.nav`
  padding-top: 77px;
`;
const StyledButton = styled.button`
  height: 30px;
  width: 25%;
  color: black;
  background: ${(props) => (props.active ? "grey" : "lightgrey")};
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
        variant="page1"
        active={currentPage === 1}
        onClick={() => handlePageChange(1)}
      >
        {currentPage !== 1 ? "Go to page 1" : " you are on page 1"}
      </StyledButton>
      <StyledButton
        name="page2"
        type="button"
        variant="page2"
        active={currentPage === 2}
        onClick={() => handlePageChange(2)}
      >
        {currentPage !== 2 ? "Go to page 2" : " you are on page 2"}
      </StyledButton>
      <StyledButton
        name="page3"
        type="button"
        active={currentPage === 3}
        onClick={() => handlePageChange(3)}
      >
        {currentPage !== 3 ? "Go to page 3" : " you are on page 3"}
      </StyledButton>
      <StyledButton
        name="page4"
        type="button"
        active={currentPage === 4}
        onClick={() => handlePageChange(4)}
      >
        {currentPage !== 4 ? "Go to page 4" : " you are on page 4"}
      </StyledButton>
      {currentPage === 1 && <Page1 />}
      {currentPage === 2 && <Page2 />}
      {currentPage === 3 && <Page3 />}
      {currentPage === 4 && <Page4 />}
    </StyledNav>
  );
}
