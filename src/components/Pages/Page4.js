import { useState } from "react";
import { postPage } from "../../api";

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
      <h1>add new content</h1>
      <ul>
        <h3>choose where to post</h3>

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
      </ul>
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
        <input type="text" name="header" id="header" />
        <label htmlFor="content">Content</label>
        <textarea type="text" name="content" id="content" />
        <button name="post" type="submit">
          post
        </button>
      </form>
    </div>
  );
}
