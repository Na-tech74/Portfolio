import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/portfolio.css';

const App = () => {
  const [activePage, setActivePage] = useState('about');

  return (
    <>
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <Container fluid className="py-4 px-3 px-md-4" style={{ maxWidth: 1280, position: 'relative', zIndex: 1 }}>
        <Row className="g-4">
          <Col lg={4} xl={3}>
            <Sidebar />
          </Col>
          <Col lg={8} xl={9}>
            <Navbar activePage={activePage} setActivePage={setActivePage} />
            <div className="mt-4">
              {activePage === 'about' && <AboutPage />}
              {activePage === 'resume' && <ResumePage />}
              {activePage === 'projects' && <PortfolioPage />}
              {activePage === 'blog' && <BlogPage />}
              {activePage === 'contact' && <ContactPage />}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
