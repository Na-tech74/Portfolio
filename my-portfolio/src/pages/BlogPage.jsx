// pages/BlogPage.jsx
import React from 'react';
import { BlogPostList } from '../components/BlogList';
import { blogPostsData } from '../helpers/data/content';

const BlogPage = ({ isActive }) => (
  <article className={`blog ${isActive ? 'active' : ''}`} data-page="blog">
    <header>
      <h2 className="h2 article-title">Blog</h2>
    </header>
    <BlogPostList posts={blogPostsData} />
  </article>
);

export default BlogPage;