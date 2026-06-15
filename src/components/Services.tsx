import { services } from "../data/content";

export default function Services() {
  return (
    <section className="services reveal" id="services">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: "14px" }}>
              Services · 06
            </div>
            <h2>
              The six things I do <span className="em">most weeks.</span>
            </h2>
          </div>
        </div>
        <div className="grid3">
          {services.map((svc) => (
            <div key={svc.no} className="svc">
              <span className="no">{svc.no}</span>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
              <ul>
                {svc.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
