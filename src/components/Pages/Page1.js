import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { deletePost, fetchPage } from "../../api";

const StyledFieldset = styled.fieldset`
  display: grid;
`;
const StyledH3 = styled.h3`
  border: 1px solid black;

  padding-left: 130px;
`;

export default function Page1() {
  const [pages, setPages] = useState(null);

  useEffect(() => {
    fetchPage(1).then((data) => {
      setPages(data);
    });
  }, []);
  return (
    <StyledFieldset>
      {pages &&
        pages.map((page) => (
          <Fragment key={page._id}>
            <StyledH3>{page.header}</StyledH3>
            <p>{page.content}</p>
            <button
              style={{
                padding: "2px",
                paddingLeft: "5px",
                paddingRight: "5px",

                border: "1px solid black",
                borderRadius: "50%",
                color: "white",
                backgroundColor: "black",
                width: "20px",
                height: "20px",
                ":hover": {
                  backgroundColor: "red",
                },
              }}
              onClick={async () => {
                await deletePost(page._id);
                fetchPage(1).then((data) => {
                  setPages(data);
                });
              }}
            >
              X
            </button>
          </Fragment>
        ))}
    </StyledFieldset>
  );
}
