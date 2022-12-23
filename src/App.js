import { useState } from "react";
import { uid } from "uid";
import "./App.css";

const pageContent = [
  {
    id: "1",
    content:
      "Welcome to the website of [Name], an electronic musician specializing in modular synthesizers. With a diverse range of musical influences and a vast collection of modular gear, [Name] creates intricate and immersive soundscapes that transport listeners to new sonic dimensions. From ambient soundscapes to driving techno beats, [Name] uses their modular setup to push the boundaries of electronic music and craft truly unique and captivating performances. Take a look around to learn more about [Name]'s music, gear, and upcoming shows.",
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  function Page1(props) {
    return (
      <div>
        <div>
          {" "}
          {pageContent.map(({ id, content }) => (
            <div key={id}>
              <p>{content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function Page2(props) {
    return (
      <div>
        <p>this is the second page</p>
      </div>
    );
  }

  function Page3(props) {
    return (
      <div>
        <p>this is the third page</p>
      </div>
    );
  }

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  return (
    <div>
      <button onClick={() => handlePageChange(1)}>Go to page 1</button>
      <button onClick={() => handlePageChange(2)}>Go to page 2</button>
      <button onClick={() => handlePageChange(3)}>Go to page 3</button>
      {currentPage === 1 ? (
        <Page1 />
      ) : currentPage === 2 ? (
        <Page2 />
      ) : (
        <Page3 />
      )}
    </div>
  );
}

export default App;
