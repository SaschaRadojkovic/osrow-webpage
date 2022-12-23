import { useState } from "react";
import { uid } from "uid";
import "./App.css";
import React from "react";
import Page1 from "./components/Pages/Page1";
import Page2 from "./components/Pages/Page2";
import Page3 from "./components/Pages/Page3";

const blog = [];

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState(blog);
  const [selected, setSelected] = useState(null);

  function postIt() {
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

  function handlePosts({ header, content }) {
    return setPosts([...posts, { header, content, id: uid() }]);
  }

  function Page4(props) {
    return (
      <div>
        <h1>add new content</h1>
        <form
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
          <input
            // This is called a controlled input.
            // value={inputValue}
            // onChange={(event) => {
            //   setInputValue(event.target.value);
            // }}
            type="text"
            name="header"
            id="header"
          />
          <label htmlFor="content">Content</label>
          <textarea type="text" name="content" id="content" />
          <button name="post" type="submit">
            post
          </button>
        </form>

        <ul>
          <h3>choose where to post</h3>

          <li>
            <input
              type="checkbox"
              checked={selected === "checkbox1"}
              onChange={() => setSelected("checkbox1")}
            />
            page one
          </li>
          <li>
            <input
              type="checkbox"
              checked={selected === "checkbox2"}
              onChange={() => setSelected("checkbox2")}
            />
            page two
          </li>
          <li>
            <input
              type="checkbox"
              checked={selected === "checkbox3"}
              onChange={() => setSelected("checkbox3")}
            />
            page three
          </li>
        </ul>
      </div>
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
      {currentPage === 1 ? (
        <Page1 />
      ) : currentPage === 2 ? (
        <Page2 />
      ) : currentPage === 3 ? (
        <Page3 />
      ) : currentPage === 4 ? (
        <Page4 />
      ) : (
        currentPage
      )}
    </div>
  );
}

export default App;
