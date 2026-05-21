import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { servicesData, hobbiesData } from '../helpers/data/content';

const SectionTitle = ({ icon, children }) => (
  <div className="section-title">
    <span className="icon-box"><FontAwesomeIcon icon={icon} /></span>
    {children}
  </div>
);

const AboutPage = () => (
  <div className="d-flex flex-column gap-4">
    <div className="card card-glass animate-in animate-d1">
      <div className="p-4 p-md-5">
        <SectionTitle icon="user">Giới thiệu</SectionTitle>
        <div className="d-flex align-items-start gap-3 mb-3">
          <span className="service-icon">
            <FontAwesomeIcon icon="quote-left" />
          </span>
          <div>
            <h5 className="fw-bold mb-0">Nam Nguyễn</h5>
            <span className="text-muted">Fullstack Developer</span>
          </div>
        </div>
        <div style={{ lineHeight: 1.9 }}>
          <p className="mb-2">
            Sinh viên IT đam mê phát triển phần mềm, hiểu các công nghệ <strong>Backend</strong> với
            các ngôn ngữ lập trình như <strong>JavaScript , Python , C# </strong> và các framework như
            <strong> Express.js, FastAPI, Flask, ASP.NET</strong> 
          </p>
          <p className="mb-2">
            Hiểu và sử dụng được các công nghệ như <strong>React, Docker, JWT, PostgreSQL, MySQL, Python, Node.js</strong>.
          </p>
          <p className="mb-0">
            Mục tiêu trở thành <strong> Fullstack Developer</strong> giỏi.
          </p>
        </div>
      </div>
    </div>

    <div className="card animate-in animate-d2">
      <div className="p-4 p-md-5">
        <SectionTitle icon="code">Kỹ năng</SectionTitle>
        <Row className="g-3">
          {servicesData.map((service, i) => (
            <Col md={6} key={i}>
              <div className="service-item">
                <div className="d-flex gap-3 align-items-start">
                  <div className="service-icon">
                    <FontAwesomeIcon icon={service.icon} />
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="fw-bold mb-1" style={{ fontSize: '0.9rem' }}>{service.title}</h6>
                    <p className="text-muted small mb-0">{service.text}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>

    <div className="card animate-in animate-d3">
      <div className="p-4 p-md-5">
        <SectionTitle icon="music">Sở thích</SectionTitle>
        <Carousel
          interval={3000}
          pause="hover"
          className="hobby-carousel"
          indicators={true}
          prevIcon={<span style={{ fontSize: '0.8rem' }}>&#10094;</span>}
          nextIcon={<span style={{ fontSize: '0.8rem' }}>&#10095;</span>}
        >
          {[...Array(Math.ceil(hobbiesData.length / 2))].map((_, slideIdx) => (
            <Carousel.Item key={slideIdx}>
              <Row className="g-3 justify-content-center">
                {hobbiesData.slice(slideIdx * 2, slideIdx * 2 + 2).map((hobby, i) => (
                  <Col xs={10} sm={6} key={i}>
                    <div className="hobby-item">
                      <div className="hobby-icon mb-3">
                        <FontAwesomeIcon icon={hobby.icon} />
                      </div>
                      <h6 className="fw-bold mb-2">{hobby.name}</h6>
                      <p className="text-muted small mb-0" style={{ lineHeight: 1.6 }}>
                        {hobby.description.length > 100 ? hobby.description.slice(0, 100) + '...' : hobby.description}
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>

    <div className="card animate-in animate-d4">
      <div className="p-4 p-md-5">
        <SectionTitle icon="bullseye">Định hướng</SectionTitle>
        <Row className="g-3">
          <Col md={6}>
            <div className="orient-item">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="service-icon" style={{ width: 36, height: 36, fontSize: '0.85rem' }}>
                  <FontAwesomeIcon icon="bullseye" />
                </span>
                <h6 className="fw-bold mb-0">Ngắn hạn</h6>
              </div>
              <div style={{ paddingLeft: 0 }}>
                {['Hoàn thiện Frontend React, TypeScript, SCSS', 'Xây dựng dự án cá nhân thực tế', 'Học Backend FastAPI & Node.js'].map((item, i) => (
                  <div key={i} className="d-flex gap-2 small text-secondary mb-1">
                    <span className="text-primary fw-bold">{'0' + (i + 1)}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="orient-item">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="service-icon" style={{ width: 36, height: 36, fontSize: '0.85rem' }}>
                  <FontAwesomeIcon icon="rocket" />
                </span>
                <h6 className="fw-bold mb-0">Dài hạn</h6>
              </div>
              <div style={{ paddingLeft: 0 }}>
                {['Lập trình viên Frontend chuyên nghiệp', 'Làm việc với AI & Cloud', 'Fullstack Developer / Software Engineer'].map((item, i) => (
                  <div key={i} className="d-flex gap-2 small text-secondary mb-1">
                    <span className="text-primary fw-bold">{'0' + (i + 1)}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);

export default AboutPage;
