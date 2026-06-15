import { sparkHeights } from "../data/content";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div>
          <div className="eyebrow">Google Ads for Local Business</div>
          <h1 className="head">
            More calls,<br />
            more <span className="for">foot</span>
            <br />
            <span className="acc ital">traffic</span>
            <br />
            nearby.
          </h1>
          <p className="hero-sub">
            I'm <strong>Abdul Kader</strong> — a Google Ads specialist who helps
            local businesses (clinics, dentists, plumbers, salons, law firms,
            restaurants) show up exactly when someone nearby searches. When the
            phone <em>isn't ringing</em>, I'm the person who finds out why and
            fixes it. Calm, methodical, paid by results.
          </p>
          <div className="hero-cta">
            <a href="#book" className="btn">Book a free 30-min call</a>
            <a href="#work" className="btn ghost">See the results</a>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/hero.jpg"
            alt="Abdul Kader"
            className="hero-img"
          />
          <div className="vcard">
            <div>
              <div className="sm">Calls booked · 90 days</div>
              <div className="big">1,840</div>
            </div>
            <div className="spark" id="spark">
              {sparkHeights.map((h, i) => (
                <span key={i} style={{ height: `${h}px` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
