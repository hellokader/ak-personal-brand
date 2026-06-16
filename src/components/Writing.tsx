import { Link } from "react-router-dom";
import { blogPosts } from "../data/posts";

export default function Writing() {
  const previewPosts = blogPosts.slice(0, 3);

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
          <Link
            to="/blog"
            className="mono"
            style={{ fontSize: "11px", letterSpacing: ".1em", color: "var(--mint-deep)" }}
          >
            ALL POSTS →
          </Link>
        </div>
        <div className="posts">
          {previewPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="post">
              <div className="date">
                <span>{post.date}</span>
                <span>{post.readTime} read</span>
              </div>
              <div className="thumb" />
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className="read">READ →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
