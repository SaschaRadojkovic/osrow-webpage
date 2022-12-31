import { useEffect, useState } from "react";
import { deletePost, fetchPage } from "../../api";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { StyledDiv, StyledH3, StyledP, StyledSection } from "./Page1";

export default function Page2() {
  const [pages, setPages] = useState(null);

  useEffect(() => {
    fetchPage(2).then((data) => {
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
              style={{ position: "absolute", top: 18, right: 10 }}
              onClick={async () => {
                await deletePost(page._id);
                fetchPage(2).then((data) => {
                  setPages(data);
                });
              }}
            ></DeleteForeverIcon>
          </StyledSection>
        ))}
    </StyledDiv>
  );
}
