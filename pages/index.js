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
      <h1>WARP Generator</h1>
      <p>Выберите зеркало:</p>
      <div className="buttons">
        <div className="bot-section">
          <a
            href={mirrors[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            {mirrors[0].name}
          </a>
        </div>
        
        <div className="sites-grid">
          <a
            href={mirrors[1].url}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            {mirrors[1].name}
          </a>
          <a
            href={mirrors[2].url}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            {mirrors[2].name}
          </a>
          <a
            href={mirrors[3].url}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            {mirrors[3].name}
          </a>
          <a
            href={mirrors[4].url}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            {mirrors[4].name}
          </a>
        </div>
        
        <div className="telegram-section">
          <a
            href={mirrors[5].url}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            {mirrors[5].name}
          </a>
        </div>
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
          gap: 20px;
          max-height: 60vh;
          overflow: hidden;
        }
        .bot-section {
          display: flex;
          justify-content: center;
        }
        .bot-section .button {
          width: 100%;
          max-width: calc(2 * 200px + 12px);
        }
        .sites-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          width: 100%;
          max-width: calc(2 * 200px + 12px);
        }
        .telegram-section {
          display: flex;
          justify-content: center;
        }
        .telegram-section .button {
          width: 100%;
          max-width: calc(2 * 200px + 12px);
        }
        @media (max-width: 768px) {
          .buttons {
            flex-direction: column;
            gap: 12px;
          }
          .sites-grid {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
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
