import { Link } from "react-router-dom";
import { blogPosts, getFeaturedPost } from "../data/posts";

export default function BlogList() {
  const featuredPost = getFeaturedPost();
  const otherPosts = blogPosts.filter((p) => !p.featured);

  return (
    <section className="blog-page">
      {/* Hero */}
      <div className="blog-hero">
        <div className="wrap">
          <div className="eyebrow">Blog · Local Google Ads</div>
          <h1 className="blog-title">
            What I'm thinking about.
          </h1>
          <p className="blog-lead">
            Straight talk on Google Ads for local businesses — what's
            working, what's wasted, and what I do differently.
          </p>
        </div>
      </div>

      <div className="wrap">
        {/* Featured Post */}
        {featuredPost && (
          <div className="blog-featured">
            <Link to={`/blog/${featuredPost.slug}`} className="blog-feat-link">
              <div className="blog-feat-img">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <span className="blog-cat">{featuredPost.category}</span>
              </div>
              <div className="blog-feat-body">
                <div className="blog-meta">
                  <span className="mono" style={{ fontSize: "11px", color: "var(--muted)" }}>
                    {featuredPost.date}
                  </span>
                  <span className="mono" style={{ fontSize: "11px", color: "var(--muted)" }}>
                    {featuredPost.readTime} read
                  </span>
                </div>
                <h2 className="blog-feat-title">{featuredPost.title}</h2>
                <p className="blog-feat-excerpt">{featuredPost.excerpt}</p>
                <span className="blog-read-link">
                  Read article →
                </span>
              </div>
            </Link>
          </div>
        )}

        {/* Post Grid */}
        <div className="blog-grid">
          {otherPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="blog-card">
              <div className="blog-card-img">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-card-body">
                <div className="blog-meta">
                  <span className="blog-cat">{post.category}</span>
                  <span className="mono" style={{ fontSize: "10px", color: "var(--muted)" }}>
                    {post.date}
                  </span>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <span className="mono" style={{ fontSize: "10px", color: "var(--muted)" }}>
                    {post.readTime} read
                  </span>
                  <span className="blog-read-link">Read →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="blog-newsletter">
          <div className="newsletter-box">
            <h3>Get the next article in your inbox.</h3>
            <p>
              One email per post. No pitch. Unsubscribe anytime.
            </p>
            <form
              className="newsletter-form"
              onSubmit={(e) => {
                e.preventDefault();
                const input = e.currentTarget.querySelector("input");
                if (input) input.value = "";
                const btn = e.currentTarget.querySelector("button");
                if (btn) btn.textContent = "You're in ✓";
              }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                required
              />
              <button type="submit" className="btn">
                Subscribe →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
