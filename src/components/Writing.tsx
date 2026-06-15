import { posts } from "../data/content";

export default function Writing() {
  return (
    <section className="writing reveal" id="writing">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: "14px" }}>
              Writing · 11
            </div>
            <h2
              style={{
                fontFamily: "'Red Hat Display', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(26px,3.2vw,38px)",
                letterSpacing: "-0.02em",
              }}
            >
              What I'm <span className="em">thinking about.</span>
            </h2>
          </div>
          <a
            href="#"
            className="mono"
            style={{ fontSize: "11px", letterSpacing: ".1em", color: "var(--mint-deep)" }}
          >
            ALL POSTS →
          </a>
        </div>
        <div className="posts">
          {posts.map((post, i) => (
            <div key={i} className={`post${post.featured ? " feat" : ""}`}>
              <div className="date">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <div className="thumb" />
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
              <a href="#" className="read">
                READ →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
