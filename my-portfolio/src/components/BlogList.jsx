import React from 'react';

// Blog Post Item Component
const BlogPostItem = ({ title, category, date, displayDate, image, text, link }) => (
  <li className="blog-post-item">
    <a href={link}>
      <figure className="blog-banner-box">
        <img src={image} alt={title} loading="lazy" />
      </figure>
      <div className="blog-content">
        <div className="blog-meta">
          <p className="blog-category">{category}</p>
          <span className="dot"></span>
          <time dateTime={date}>{displayDate}</time>
        </div>
        <h3 className="h3 blog-item-title">{title}</h3>
        <p className="blog-text">{text}</p>
      </div>
    </a>
  </li>
);

export const BlogPostList = ({ posts }) => (
  <section className="blog-posts">
    <ul className="blog-posts-list">
      {posts.map((post, index) => (
        <BlogPostItem key={index} {...post} />
      ))}
    </ul>
  </section>
);
// ====================================