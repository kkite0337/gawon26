const releases = [
  {
    title: 'GO HARD',
    year: '2026',
    href: 'https://www.youtube.com/results?search_query=MEOVV+GO+HARD',
  },
  {
    title: 'Bite Now',
    year: '2026',
    href: 'https://www.youtube.com/results?search_query=MEOVV+Bite+Now',
  },
  {
    title: 'HANDS UP',
    year: '2024',
    href: 'https://www.youtube.com/results?search_query=MEOVV+HANDS+UP',
  },
  {
    title: 'TOXIC',
    year: '2024',
    href: 'https://www.youtube.com/results?search_query=MEOVV+TOXIC',
  },
  {
    title: 'MEOW',
    year: '2024',
    href: 'https://www.youtube.com/results?search_query=MEOVV+MEOW',
  },
]

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__stage" aria-hidden="true" />
        <div className="hero__grain" aria-hidden="true" />
        <div className="hero__content">
          <h1 className="hero__brand">
            Gawon<span>26</span>
          </h1>
          <p className="hero__line">
            MEOVV의 가원을 위한 팬 스페이스. Vocal, rap, and a quiet kind of fire.
          </p>
          <div className="hero__actions">
            <a
              className="cta cta--amber"
              href="https://www.instagram.com/gawon/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a className="cta" href="#about">
              About
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <p className="section__label">About</p>
          <h2 className="section__title">Lee Gawon · 이가원</h2>
          <p className="section__copy">
            THEBLACKLABEL 소속 그룹 MEOVV의 멤버. 한국어와 영어를 오가며 무대와
            작사에 힘을 싣고, 프라다 앰버서더로 패션까지 이어가는 아티스트입니다.
            이 사이트는 공식 채널이 아닌 팬이 만든 공간입니다.
          </p>
        </section>

        <section className="section" id="music">
          <p className="section__label">Listen</p>
          <h2 className="section__title">Selected releases</h2>
          <p className="section__copy">
            공식 음원·뮤직비디오로 바로 이어지는 목록입니다.
          </p>
          <ol className="music-list">
            {releases.map((item, index) => (
              <li key={item.title}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <span className="music-list__idx">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="music-list__name">{item.title}</span>
                  <span className="music-list__meta">{item.year}</span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section className="section" id="links">
          <p className="section__label">Links</p>
          <h2 className="section__title">Follow the trail</h2>
          <div className="links-row">
            <a
              className="cta"
              href="https://www.instagram.com/gawon/"
              target="_blank"
              rel="noreferrer"
            >
              @gawon
            </a>
            <a
              className="cta"
              href="https://www.youtube.com/@MEOVV_OFFICIAL"
              target="_blank"
              rel="noreferrer"
            >
              MEOVV YouTube
            </a>
            <a
              className="cta"
              href="https://www.instagram.com/meovv_official/"
              target="_blank"
              rel="noreferrer"
            >
              MEOVV Instagram
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          <strong>gawon26.kr</strong> · unofficial fan site
        </p>
        <p>Not affiliated with THEBLACKLABEL or MEOVV.</p>
      </footer>
    </div>
  )
}
