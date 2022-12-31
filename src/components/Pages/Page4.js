import { useState } from "react";
import { postPage } from "../../api";
import styled from "styled-components";
import { StyledDiv, StyledH3, StyledSection } from "./Page1";

const StyledFieldset = styled.fieldset`
  margin: 50px;
`;
const StyledForm = styled.form`
  padding: 10px;
  background: beige;
  display: grid;
`;

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
`;

const StyledH2 = styled.h2`
  text-align: center;
`;

export function Page4(props) {
  const [selectedPage, setSelectedPage] = useState(null);
  async function handlePosts(page) {
    // console.log("page", page);
    // console.log("selected", selectedPage);
    const body = { ...page, page: selectedPage };
    const result = await postPage(body);
    console.log("result", result);
  }
  return (
    <StyledDiv>
      <StyledSection>
        <StyledH2>Add New Content</StyledH2>
        <StyledH3>choose where to post</StyledH3>
        <StyledUl>
          <li>
            <input
              name="page"
              type="checkbox"
              checked={selectedPage === 1}
              onChange={() => setSelectedPage(1)}
            />
            page one
          </li>
          <li>
            <input
              name="page"
              type="checkbox"
              checked={selectedPage === 2}
              onChange={() => setSelectedPage(2)}
            />
            page two
          </li>
          <li>
            <input
              name="page"
              type="checkbox"
              checked={selectedPage === 3}
              onChange={() => setSelectedPage(3)}
            />
            page three
          </li>
        </StyledUl>
        <StyledFieldset>
          <StyledForm
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.target);
              const data = Object.fromEntries(formData);
              handlePosts(data);

              console.log(data);
            }}
            type="input"
            name="form"
          >
            <label htmlFor="header">Headline</label>
            <input type="text" name="header" id="header" />

            <label htmlFor="content">Content</label>
            <textarea type="text" name="content" id="content" />
            <button name="post" type="submit">
              post
            </button>
          </StyledForm>
        </StyledFieldset>
      </StyledSection>
    </StyledDiv>
  );
}
