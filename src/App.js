import { useState } from "react";
import { uid } from "uid";
import "./App.css";
import React from "react";
import Page1 from "./components/Pages/Page1";
import Page2 from "./components/Pages/Page2";
import Page3 from "./components/Pages/Page3";
import { Page4 } from "./components/Pages/Page4";

const blog = [];

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState(blog);

  const [checked, setChecked] = useState(false);

  function handlePostIt() {
    setChecked(checked);
    return (
      <ul>
        {posts.map((blog) => {
          return (
            <li key={blog.id}>
              <h2>{blog.header}</h2>
              <p>{blog.content}</p>
            </li>
          );
        })}
      </ul>
    );
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  return (
    <div>
      <button name="page1" type="button" onClick={() => handlePageChange(1)}>
        Go to page 1
      </button>
      <button name="page2" type="button" onClick={() => handlePageChange(2)}>
        Go to page 2
      </button>
      <button name="page3" type="button" onClick={() => handlePageChange(3)}>
        Go to page 3
      </button>
      <button name="page4" type="button" onClick={() => handlePageChange(4)}>
        Go to page 4
      </button>
      {currentPage === 1 && <Page1 />}
      {currentPage === 2 && <Page2 />}
      {currentPage === 3 && <Page3 />}
      {currentPage === 4 && <Page4 />}
    </div>
  );
}

export default App;
