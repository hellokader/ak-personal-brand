import { cases } from "../data/content";

export default function CaseStudies() {
  return (
    <section className="cases reveal" id="work">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: "14px" }}>
              Selected work · 07
            </div>
            <h2>
              Receipts, not <span className="em">screenshots.</span>
            </h2>
          </div>
          <a href="#" className="mono" style={{ fontSize: "11px", letterSpacing: ".1em", color: "var(--mint-deep)" }}>
            ALL CASE STUDIES →
          </a>
        </div>

        {cases.map((c, i) => (
          <div key={i} className="case">
            <div className="shot">
              <div className="g" />
              <div className="bar" />
            </div>
            <div className="meta">
              <div className="tag">{c.tag}</div>
              <h3>{c.title}</h3>
              <div className="who">{c.who}</div>
              <a href="#">READ FULL STUDY →</a>
            </div>
            <div className="nums">
              {c.metrics.map((m) => (
                <div key={m.label} className="nrow">
                  <span className="nk">{m.label}</span>
                  <span className={`nv${m.up ? " up" : ""}`}>{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
