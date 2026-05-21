import React, { useState } from 'react';
import { Row, Col, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../helpers/icons/icons';
import { projectsData } from '../helpers/data/content';

const filters = ['All', 'Web design', 'Applications', 'Web development', 'Datasets', 'Shared projects & Documents'];

const PortfolioPage = () => {
  const [selected, setSelected] = useState('All');
  const filtered = selected === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selected);

  return (
    <div className="card animate-in">
      <div className="p-4 p-md-5">
        <div className="section-title">
          <span className="icon-box"><FontAwesomeIcon icon="folder-open" /></span>
          Dự án
        </div>

        <Stack direction="horizontal" gap={2} className="flex-wrap mb-4 pb-2">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${selected === f ? 'active' : ''}`}
              onClick={() => setSelected(f)}
            >
              {f}
            </button>
          ))}
        </Stack>

        {filtered.length === 0 ? (
          <p className="text-muted text-center py-4 mb-0">Không có dự án nào trong danh mục này.</p>
        ) : (
          <Row className="g-4">
            {filtered.map((project, i) => (
              <Col md={6} lg={4} key={i}>
                <a href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="text-decoration-none d-block h-100">
                  <div className="project-item">
                    <div className="project-img-wrap">
                      <img src={project.image} alt={project.title} loading="lazy" />
                      <span className="project-cat-badge">{project.category}</span>
                      <div className="project-overlay">
                        <FontAwesomeIcon icon={icons.eye} />
                      </div>
                    </div>
                    <div className="project-body">
                      <h6 className="fw-bold text-dark mb-0">{project.title}</h6>
                    </div>
                  </div>
                </a>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
