import { Fragment, useEffect, useState } from "react";
import { deletePost, fetchPage } from "../../api";

export default function Page2() {
  const [pages, setPages] = useState(null);

  useEffect(() => {
    fetchPage(2).then((data) => {
      setPages(data);
    });
  }, []);
  return (
    <div>
      {pages &&
        pages.map((page) => (
          <Fragment key={page._id}>
            <h3>{page.header}</h3>
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
                fetchPage(2).then((data) => {
                  setPages(data);
                });
              }}
            >
              X
            </button>
          </Fragment>
        ))}
    </div>
  );
}
