import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="quotes reveal">
      <div className="wrap">
        <div className="eyebrow">Why founders say · 09</div>
        <h2>
          Most clients find me through a quiet referral.{" "}
          <span className="em">Here's why.</span>
        </h2>
        <div className="qgrid">
          {testimonials.map((t, i) => (
            <div key={i} className="qcard">
              <div className="stars">★★★★★</div>
              <p>"{t.quote}"</p>
              <div className="by">
                <div className="av" />
                <div>
                  <b>{t.name}</b>
                  <small>{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
