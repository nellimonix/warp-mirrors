export default function Home() {
  const mirrors = [
    { name: "Warp Generator Bot", path: "/mirror/telegram" },
    { name: "warp.llimonix.pw", path: "/mirror/warp_llimonix" },
    { name: "warply.vercel.app", path: "/mirror/warply_vercel" },
    { name: "getwarp.netlify.app", path: "/mirror/getwarp_netlify" },
    { name: "warp.pages.dev", path: "/mirror/warp_pages" },
  ];

  return (
    <div className="container">
      <h1>WARP Configuration Generator</h1>
      <p>Выберите зеркало для генерации конфигурации:</p>
      <div className="buttons">
        {mirrors.map((mirror, index) => (
          <a
            key={index}
            href={mirror.path}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            {mirror.name}
          </a>
        ))}
      </div>

      <style jsx>{`
        .container {
          background-color: #121212;
          color: #ffffff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: Arial, sans-serif;
          padding: 20px;
        }
        h1 {
          font-size: 2.5rem;
        }
        p {
          margin-top: 10px;
          font-size: 1.2rem;
        }
        .buttons {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 30px;
        }
        .button {
          padding: 15px 25px;
          background-color: #4f46e5;
          color: white;
          border-radius: 10px;
          text-decoration: none;
          font-weight: bold;
          transition: transform 0.2s, background-color 0.2s;
        }
        .button:hover {
          transform: scale(1.05);
          background-color: #3730a3;
        }
      `}</style>
    </div>
  );
}
