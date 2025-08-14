export default function Home() {
  const mirrors = [
    { name: "Warp Generator Bot", url: "https://t.me/warp_generator_bot" },
    { name: "warp.llimonix.pw", url: "https://warp.llimonix.pw" },
    { name: "warply.vercel.app", url: "https://warply.vercel.app" },
    { name: "getwarp.netlify.app", url: "https://getwarp.netlify.app" },
    { name: "warp.pages.dev", url: "https://warp.pages.dev" },
  ];

    return (
    <div className="container">
      <h1>WARP Configuration Generator</h1>
      <p>Выберите зеркало:</p>
      <div className="buttons">
        {mirrors.map((mirror, index) => (
          <a
            key={index}
            href={mirror.url}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            {mirror.name}
          </a>
        ))}
      </div>

      <style jsx>{`
        html, body {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow: hidden; /* полностью убираем скролл */
          background-color: #1e1e1e; /* тёмный фон */
        }
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100%;
          color: #ffffff;
          font-family: Arial, sans-serif;
          text-align: center;
        }
        h1 {
          margin: 0 0 15px 0;
          font-size: 2rem;
        }
        p {
          margin: 0 0 25px 0;
          font-size: 1.1rem;
        }
        .buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .button {
          padding: 12px 20px;
          background-color: #0088cc; /* телеграмовский синий */
          color: white;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
