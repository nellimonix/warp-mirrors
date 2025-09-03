import mirrors from '../data/mirrors.json';

export default function Home() {
  return (
    <div className="container">
      <div className="main-content">
        <div className="header">
          <h1>WARP Generator</h1>
          <p>Выберите зеркало для доступа</p>
        </div>

        <div className="content-wrapper">
          <div className="mirrors-grid">
            {mirrors.map((mirror, index) => (
              <a
                key={index}
                href={mirror.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mirror-block"
              >
                <div className="block-inner">
                  <div className="avatar">
                    <img src={mirror.avatar} alt={mirror.name} />
                  </div>
                  <div className="content">
                    <h3>{mirror.name}</h3>
                    <p>{mirror.description}</p>
                  </div>
                  <div className="arrow">›</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}