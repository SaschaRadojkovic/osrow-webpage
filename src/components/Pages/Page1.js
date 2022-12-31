import { useEffect, useState } from "react";
import styled from "styled-components";
import { deletePost, fetchPage } from "../../api";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const StyledDiv = styled.div`
  margin: 20px;
  display: grid;
  gap: 20px;
`;

export const StyledSection = styled.section`
  padding-left: 40px;
  padding-right: 40px;

  display: grid;
  min-width: 400px;
  width: 80%;
  margin: auto;
  border-radius: 10px;
  box-shadow: 5px 5px 5px;
  background-color: #ecf2e6;
`;

export const StyledH3 = styled.h3`
  color: #080603;
  text-align: center;
  background: lightgrey;
`;

export const StyledP = styled.p`
  text-align: center;
`;

export const StyledDeleteButton = styled.button`
position:absolute;
margin-left:100px;
margin-top :1px;


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
  background-color: red;
  
`;

export default function Page1() {
  const [pages, setPages] = useState(null);

  useEffect(() => {
    fetchPage(1).then((data) => {
      setPages(data);
    });
  }, []);
  return (
    <StyledDiv>
      {pages &&
        pages.map((page) => (
          <StyledSection key={page._id}>
            <StyledH3>{page.header}</StyledH3>
            <StyledP>{page.content}</StyledP>
            <DeleteForeverIcon
              onClick={async () => {
                await deletePost(page._id);
                fetchPage(1).then((data) => {
                  setPages(data);
                });
              }}
            ></DeleteForeverIcon>{" "}
          </StyledSection>
        ))}
    </StyledDiv>
  );
}
