import { useParams, Link } from "react-router-dom";
import { getPostBySlug, getRecentPosts } from "../data/posts";
import { useEffect } from "react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const relatedPosts = slug ? getRecentPosts(slug, 3) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="wrap" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <p>Post not found.</p>
        <Link to="/blog">← Back to blog</Link>
      </div>
    );
  }

  return (
    <article className="blog-post">
      {/* Post Header */}
      <div className="post-header">
        <div className="wrap">
          <Link to="/blog" className="back-link">
            ← Blog
          </Link>
          <div className="post-meta">
            <span className="blog-cat">{post.category}</span>
            <span className="mono" style={{ fontSize: "11px", color: "var(--muted)" }}>
              {post.date}
            </span>
            <span className="mono" style={{ fontSize: "11px", color: "var(--muted)" }}>
              {post.readTime} read
            </span>
          </div>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-excerpt">{post.excerpt}</p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="post-hero-img">
        <div className="wrap">
          <img src={post.image} alt={post.title} />
        </div>
      </div>

      {/* Content */}
      <div className="post-body">
        <div className="wrap">
          <div className="post-layout">
            {/* Sidebar / TOC */}
            <aside className="post-sidebar">
              <div className="post-sidebar-inner">
                <p className="sidebar-label">On this page</p>
                <nav className="toc">
                  {post.content.sections.map((section, i) => (
                    <a
                      key={i}
                      href={`#section-${i}`}
                      className={`toc-link ${section.level === 3 ? "toc-sub" : ""}`}
                    >
                      {section.heading}
                    </a>
                  ))}
                  <a href="#faq" className="toc-link">FAQ</a>
                </nav>
                <div className="share-section">
                  <p className="sidebar-label">Share</p>
                  <div className="share-btns">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="share-btn"
                    >
                      Post
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent("https://abdulkader.co/blog/" + post.slug)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="share-btn"
                    >
                      Share
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="post-content">
              {/* Intro */}
              <p className="post-intro">{post.content.intro}</p>

              {/* Sections */}
              {post.content.sections.map((section, i) => (
                <div key={i} id={`section-${i}`} className="post-section">
                  {section.level === 2 ? (
                    <h2>{section.heading}</h2>
                  ) : (
                    <h3>{section.heading}</h3>
                  )}
                  <p>{section.body}</p>
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet, j) => (
                        <li key={j}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* FAQ */}
              <div id="faq" className="faq-section">
                <h2>Frequently Asked Questions</h2>
                {post.content.faq.map((item, i) => (
                  <div key={i} className="faq-item">
                    <h4>{item.question}</h4>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>

              {/* Author */}
              <div className="author-card">
                <div className="author-avatar" />
                <div className="author-info">
                  <b>Written by {post.author}</b>
                  <p>{post.content.authorBio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="related-posts">
          <div className="wrap">
            <h3 className="related-title">Keep reading</h3>
            <div className="related-grid">
              {relatedPosts.map((rp) => (
                <Link key={rp.id} to={`/blog/${rp.slug}`} className="blog-card">
                  <div className="blog-card-img">
                    <img src={rp.image} alt={rp.title} />
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-meta">
                      <span className="blog-cat">{rp.category}</span>
                      <span className="mono" style={{ fontSize: "10px", color: "var(--muted)" }}>
                        {rp.readTime}
                      </span>
                    </div>
                    <h3 className="blog-card-title">{rp.title}</h3>
                    <p className="blog-card-excerpt">{rp.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Newsletter */}
      <div className="post-newsletter">
        <div className="wrap">
          <div className="newsletter-box">
            <h3>Get the next article in your inbox.</h3>
            <p>One email per post. No pitch. Unsubscribe anytime.</p>
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
              <input type="email" placeholder="your@email.com" required />
              <button type="submit" className="btn">Subscribe →</button>
            </form>
          </div>
        </div>
      </div>
    </article>
  );
}
