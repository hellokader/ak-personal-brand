import { about } from "../data/content";

export default function About() {
  return (
    <section className="about reveal" id="about">
      <div className="wrap">
        <div className="lead">
          <div className="eyebrow">{about.eyebrow}</div>
          <h2>
            {about.heading}
            <span className="em">{about.headingEm}</span>
          </h2>
        </div>
        <div className="spec-tbl">
          {about.rows.map((row) => (
            <div key={row.label} className="spec-row">
              <div className="lab">{row.label}</div>
              <div className="val">
                <b>{row.bold}</b>
                <p>{row.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
