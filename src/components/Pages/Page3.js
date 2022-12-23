import React from "react";

export default function Page3(props) {
  return (
    <div>
      <React.Fragment>
        <iframe
          title="silence"
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
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
