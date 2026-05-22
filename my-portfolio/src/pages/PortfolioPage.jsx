import React, { useState } from 'react';
import { Row, Col, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../helpers/icons/icons';
import { projectsData } from '../helpers/data/content';
import { useLanguage } from '../helpers/i18n/context';

const PortfolioPage = () => {
  const { t, lang } = useLanguage();
  const [selected, setSelected] = useState('All');
  const projects = projectsData(lang);

  const filters = ['All', 'Web design', 'Applications', 'Web development', 'Datasets', 'Shared projects & Documents'];

  const filterKeys = {
    'All': 'portfolio.all',
    'Web design': 'portfolio.webDesign',
    'Applications': 'portfolio.applications',
    'Web development': 'portfolio.webDev',
    'Datasets': 'portfolio.datasets',
    'Shared projects & Documents': 'portfolio.shared',
  };

  const filtered = selected === 'All'
    ? projects
    : projects.filter(p => p.category === selected);

  return (
    <div className="card animate-in">
      <div className="p-4 p-md-5">
        <div className="section-title">
          <span className="icon-box"><FontAwesomeIcon icon="folder-open" /></span>
          {t('portfolio.title')}
        </div>

        <Stack direction="horizontal" gap={2} className="flex-wrap mb-4 pb-2">
          {filters.map(f => (
            <button
              key={f}
              className={`filter-btn ${selected === f ? 'active' : ''}`}
              onClick={() => setSelected(f)}
            >
              {t(filterKeys[f])}
            </button>
          ))}
        </Stack>

        {filtered.length === 0 ? (
          <p className="text-muted text-center py-4 mb-0">{t('portfolio.empty')}</p>
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
