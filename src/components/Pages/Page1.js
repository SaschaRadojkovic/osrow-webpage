const pageContent = [
  {
    id: "1",
    content:
      "Welcome to the website of [Name], an electronic musician specializing in modular synthesizers. With a diverse range of musical influences and a vast collection of modular gear, [Name] creates intricate and immersive soundscapes that transport listeners to new sonic dimensions. From ambient soundscapes to driving techno beats, [Name] uses their modular setup to push the boundaries of electronic music and craft truly unique and captivating performances. Take a look around to learn more about [Name]'s music, gear, and upcoming shows.",
  },
];

export default function Page1(props) {
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
