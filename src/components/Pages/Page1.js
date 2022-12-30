import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { deletePost, fetchPage } from "../../api";

const StyledSection = styled.section`
  border: 1px solid black;
  display: grid;
`;

const StyledH3 = styled.h3`
  border: 1px solid black;
  text-align: center;
`;

const StyledP = styled.p`
  text-align: center;
`;

const StyledDeleteButton = styled.button`
padding: 2px;
paddingLeft: 5px;
paddingRight: 5px;


border: 1px solid black;
border-radius: 50%;
color: white;
background-color: black;
width: 20px;
height: 20px;
&:hover {
  backgroundColor: red;
`;

export default function Page1() {
  const [pages, setPages] = useState(null);

  useEffect(() => {
    fetchPage(1).then((data) => {
      setPages(data);
    });
  }, []);
  return (
    <div>
      {pages &&
        pages.map((page) => (
          <StyledSection key={page._id}>
            <StyledH3>{page.header}</StyledH3>
            <StyledP>{page.content}</StyledP>
            <StyledDeleteButton
              // style={{
              //   padding: "2px",
              //   paddingLeft: "5px",
              //   paddingRight: "5px",

              //   border: "1px solid black",
              //   borderRadius: "50%",
              //   color: "white",
              //   backgroundColor: "black",
              //   width: "20px",
              //   height: "20px",
              //   ":hover": {
              //     backgroundColor: "red",
              //   },
              // }}
              onClick={async () => {
                await deletePost(page._id);
                fetchPage(1).then((data) => {
                  setPages(data);
                });
              }}
            >
              X
            </StyledDeleteButton>
          </StyledSection>
        ))}
    </div>
  );
}
