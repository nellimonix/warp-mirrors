export default function Home() {
  const mirrors = [
    { name: "Warp Generator Bot", url: "https://t.me/warp_generator_bot" },
    { name: "warp.llimonix.pw", url: "https://warp.llimonix.pw" },
    { name: "warply.vercel.app", url: "https://warply.vercel.app" },
    { name: "getwarp.netlify.app", url: "https://getwarp.netlify.app" },
    { name: "warp.pages.dev", url: "https://warp.pages.dev" },
  ];

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>WARP Configuration Generator</h1>
      <p>Выберите зеркало для генерации конфигурации:</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "30px" }}>
        {mirrors.map((mirror, index) => (
          <a
            key={index}
            href={mirror.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "15px 25px",
              backgroundColor: "#4f46e5",
              color: "white",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            {mirror.name}
          </a>
        ))}
      </div>
    </div>
  );
}
