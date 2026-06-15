import { tools } from "../data/content";

export default function Tools() {
  return (
    <section className="tools reveal">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: "14px" }}>
              Stack · 10
            </div>
            <h2
              style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(26px,3.2vw,38px)",
                letterSpacing: "-0.02em",
              }}
            >
              The tools I use, <span className="em">most weeks.</span>
            </h2>
          </div>
        </div>
        <div className="tgrid">
          {tools.map((tool) => (
            <div key={tool.name} className="tcell">
              <span className="lab">{tool.category}</span>
              <b>{tool.name}</b>
            </div>
          ))}
        </div>
        <p className="note">
          // Not a "preferred partner" list — just what I reach for when the
          work is the work.
        </p>
      </div>
    </section>
  );
}
