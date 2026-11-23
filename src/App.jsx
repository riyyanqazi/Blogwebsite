

import { useState } from "react";
import "./App.css";

const blogs = [
  {
    id: 1,
    category: "Technology",
    title: "The Future of Artificial Intelligence",
    description: "Discover how AI is changing our world and transforming everyday life.",
    author: "Alex Morgan",
    date: "November 15, 2026",
    read: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900",
  },
  {
    id: 2,
    category: "Lifestyle",
    title: "Simple Habits for a Better Life",
    description: "Small daily habits can make a big difference in your personal life.",
    author: "Sarah Johnson",
    date: "November 12, 2026",
    read: "4 min read",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=900",
  },
  {
    id: 3,
    category: "Business",
    title: "How to Start an Online Business",
    description: "A beginner-friendly guide to building your own online business.",
    author: "David Smith",
    date: "November 10, 2026",
    read: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
  },
  {
    id: 4,
    category: "Travel",
    title: "Beautiful Places You Must Visit",
    description: "Explore amazing destinations and discover new adventures.",
    author: "Emma Wilson",
    date: "November 08, 2026",
    read: "6 min read",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900",
  },
  {
    id: 5,
    category: "Technology",
    title: "Top Technology Trends in 2026",
    description: "Explore the latest innovations shaping our digital future.",
    author: "Alex Morgan",
    date: "November 05, 2026",
    read: "5 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
  },
  {
    id: 6,
    category: "Lifestyle",
    title: "The Art of Staying Productive",
    description: "Learn practical ways to improve focus and manage your time.",
    author: "Sarah Johnson",
    date: "November 02, 2026",
    read: "4 min read",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
  },
];

const categories = ["All", "Technology", "Lifestyle", "Business", "Travel"];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      category === "All" || blog.category === category;

    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="website">
      <nav className="navbar">
        <a href="#" className="logo">Ink<span>Space.</span></a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#blogs">Blogs</a>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
        </div>

        <a href="#blogs" className="nav-button">Explore Blogs</a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="tag">WELCOME TO INKSPACE</span>
          <h1>Ideas that inspire.<br />
            Stories that <span>matter.</span>
          </h1>
          <p>
            Discover interesting stories, useful insights and fresh
            perspectives from around the world.
          </p>
          <a href="#blogs" className="primary-button">
            Explore Articles →
          </a>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1000"
            alt="Blog workspace"
          />
        </div>
      </section>

      <section className="categories" id="categories">
        <div>
          <span className="tag">EXPLORE TOPICS</span>
          <h2>Browse Categories</h2>
        </div>

        <div className="category-list">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "category active" : "category"}
              onClick={() => {
                setCategory(item);
                setSelectedBlog(null);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="blogs-section" id="blogs">
        <div className="section-heading">
          <div>
            <span className="tag">OUR LATEST STORIES</span>
            <h2>Explore Our Blogs</h2>
          </div>

          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedBlog(null);
            }}
          />
        </div>

        {selectedBlog ? (
          <article className="blog-detail">
            <button
              className="back-button"
              onClick={() => setSelectedBlog(null)}
            >
              ← Back to blogs
            </button>

            <img src={selectedBlog.image} alt={selectedBlog.title} />

            <span className="tag">{selectedBlog.category}</span>
            <h1>{selectedBlog.title}</h1>
            <p className="blog-meta">
              By {selectedBlog.author} · {selectedBlog.date} · {selectedBlog.read}
            </p>
            <p className="detail-description">
              {selectedBlog.description}
            </p>
            <p className="detail-description">
              Welcome to this article. Here you can share your ideas,
              experiences and useful information with your readers.
              This is the sample blog content. You can replace it with
              your actual article when connecting your backend.
            </p>
          </article>
        ) : (
          <div className="blog-grid">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <article className="blog-card" key={blog.id}>
                  <div className="card-image">
                    <img src={blog.image} alt={blog.title} />
                    <span>{blog.category}</span>
                  </div>

                  <div className="card-content">
                    <p className="blog-meta">
                      {blog.date} · {blog.read}
                    </p>
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>

                    <div className="card-bottom">
                      <span>By {blog.author}</span>
                      <button onClick={() => setSelectedBlog(blog)}>
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p className="empty">No blogs found. Try another search.</p>
            )}
          </div>
        )}
      </section>

      <section className="newsletter" id="about">
        <span className="tag">STAY INSPIRED</span>
        <h2>Get stories worth reading.</h2>
        <p>Subscribe to our newsletter and never miss an update.</p>

        <form onSubmit={(e) => {
          e.preventDefault();
          alert("Thanks for subscribing!");
          e.target.reset();
        }}>
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe →</button>
        </form>
      </section>

      <footer>
        <a href="#" className="logo">Ink<span>Space.</span></a>
        <p>© 2026 InkSpace. All rights reserved.</p>
        <p>Made for curious minds.</p>
      </footer>
    </div>
  );
}

export default App;
