import { useState } from "react";
import { postPage } from "../../api";
import styled from "styled-components";
import Header from "../Header/Header";

const StyledFieldset = styled.fieldset``;
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
    <div>
      <h2>add new content</h2>
      <h3>choose where to post</h3>
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
    </div>
  );
}
