import { processSteps } from "../data/content";

export default function Process() {
  return (
    <section className="process reveal">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: "14px" }}>
              How we work · 08
            </div>
            <h2>
              A repeatable <span className="em">5-step</span> process.
            </h2>
          </div>
          <p
            className="mono"
            style={{
              fontSize: "11px",
              color: "var(--muted)",
              maxWidth: "240px",
              textAlign: "right",
            }}
          >
            The same sequence for every local business. The unglamorous
            middle (tracking every call before spending more) is where most of
            the wasted budget gets saved.
          </p>
        </div>
        <div className="steps">
          {processSteps.map((step) => (
            <div key={step.no} className="step">
              <div className="sn">
                <span>Step {step.no}</span>
                <span className="dot">{step.no}</span>
              </div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
