import { useState } from "react";
import { uid } from "uid";
import "./App.css";
import React from "react";

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
        <React.Fragment>
          <iframe
            title="silence"
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/875323093&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100,
            }}
          >
            <a
              href="https://soundcloud.com/osrow_music"
              title="OSROW"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              OSROW
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/osrow_music/silence002-arg"
              title="Silence"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Silence
            </a>
          </div>
        </React.Fragment>
        <React.Fragment>
          <iframe
            title="icon"
            allowtransparency="true"
            scrolling="no"
            frameborder="no"
            src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fosrow_music&color=black_white&size=48"
            style={{ width: 48, height: 48 }}
          ></iframe>
        </React.Fragment>
      </div>
    );
  }
  function Page4(props) {
    return (
      <div>
        <p>this is the fouth page</p>
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
      <button onClick={() => handlePageChange(4)}>Go to page 4</button>
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
