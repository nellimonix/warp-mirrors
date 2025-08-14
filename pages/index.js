export default function Home() {
  const mirrors = [
    { name: "Warp Generator Bot", url: "https://t.me/warp_generator_bot" },
    { name: "warp.llimonix.pw", url: "https://warp.llimonix.pw" },
    { name: "warply.vercel.app", url: "https://warply.vercel.app" },
    { name: "getwarp.netlify.app", url: "https://getwarp.netlify.app" },
    { name: "getwarp.pages.dev", url: "https://getwarp.pages.dev" },
    { name: "Telegram канал", url: "https://t.me/+AHQ8AvLKnKtiYWRi" },
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
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          outline: none;
        }
        html, body {
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          background-color: #1a1a1a;
          position: fixed;
          top: 0;
          left: 0;
        }
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100vw;
          background-color: #1a1a1a;
          color: #ffffff;
          font-family: Arial, sans-serif;
          text-align: center;
          overflow: hidden;
          position: fixed;
          top: 0;
          left: 0;
        }
        h1 {
          margin: 0 0 15px 0;
          font-size: 2rem;
          color: #ffffff;
        }
        p {
          margin: 0 0 25px 0;
          font-size: 1.1rem;
          color: #ffffff;
        }
        .buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-height: 60vh;
          overflow: hidden;
        }
        .button {
          padding: 12px 20px;
          background-color: #0088cc;
          color: #ffffff;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
          border: none;
          outline: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .button:hover {
          background-color: #0077bb;
        }
        .button:active {
          background-color: #006699;
        }
        .button:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
}
