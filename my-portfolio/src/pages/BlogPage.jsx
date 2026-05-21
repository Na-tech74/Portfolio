import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { blogPostsData } from '../helpers/data/content';

const BlogPage = () => (
  <div className="card animate-in">
    <div className="p-4 p-md-5">
      <div className="section-title">
        <span className="icon-box"><FontAwesomeIcon icon="book-open" /></span>
        Blog
      </div>
      <Row className="g-4">
        {blogPostsData.map((post, i) => (
          <Col md={6} key={i}>
            <a href={post.link || '#'} target="_blank" rel="noopener noreferrer" className="text-decoration-none d-block h-100">
              <div className="blog-item">
                <img src={post.image} alt={post.title} className="card-img-top" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                <div className="p-3 d-flex flex-column">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="badge-soft">{post.category}</span>
                    <span className="small text-muted">
                      <FontAwesomeIcon icon="calendar" className="me-1" style={{ fontSize: '0.6rem' }} />
                      {post.displayDate}
                    </span>
                  </div>
                  <h6 className="fw-bold text-dark mb-2" style={{ fontSize: '0.9rem', lineHeight: 1.4 }}>
                    {post.title}
                  </h6>
                  <p className="small text-muted mb-0 mt-auto" style={{ lineHeight: 1.7 }}>
                    {post.text}
                  </p>
                </div>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default BlogPage;
