import React from 'react';
import { ProgressBar, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { educationData, experienceData, skillsData } from '../helpers/data/content';

const SectionTitle = ({ icon, children }) => (
  <div className="section-title">
    <span className="icon-box"><FontAwesomeIcon icon={icon} /></span>
    {children}
  </div>
);

const TimelineSection = ({ title, icon, items }) => (
  <div className="card animate-in">
    <div className="p-4 p-md-5">
      <SectionTitle icon={icon}>{title}</SectionTitle>
      <div>
        {items.map((item, i) => (
          <div key={i} className="timeline-item">
            <div className="d-flex align-items-center gap-2 flex-wrap mb-1">
              <h6 className="fw-bold mb-0" style={{ fontSize: '0.9rem' }}>{item.title}</h6>
              {item.period && (
                <span className="badge-accent">
                  <FontAwesomeIcon icon="calendar" className="me-1" style={{ fontSize: '0.6rem' }} />
                  {item.period}
                </span>
              )}
            </div>
            {item.text && <p className="text-muted small mb-0">{item.text}</p>}
            {item.details && (
              <div className="small text-secondary mt-1" style={{ lineHeight: 1.8 }}>
                {item.details.map((d, j) => (
                  <div key={j} className="d-flex gap-2">
                    <span className="text-primary flex-shrink-0" style={{ fontSize: '0.4rem', marginTop: '0.7em' }}>
                      <FontAwesomeIcon icon="circle" />
                    </span>
                    <span>{d.title || d.year ? <strong>{d.title || d.year}: </strong> : null}{d.content}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ResumePage = () => (
  <div className="d-flex flex-column gap-4">
    <TimelineSection title="Học tập" icon="book-open" items={educationData} />
    <TimelineSection title="Kinh nghiệm" icon="briefcase" items={experienceData} />

    <div className="card animate-in">
      <div className="p-4 p-md-5">
        <SectionTitle icon="chart-simple">Kỹ năng</SectionTitle>
        <Row className="g-4">
          {skillsData.map((skill, i) => (
            <Col md={6} key={i}>
              <div>
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span className="small fw-semibold">{skill.name}</span>
                  <span className="badge-soft">{skill.value}%</span>
                </div>
                <ProgressBar now={skill.value} className="skill-bar" />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  </div>
);

export default ResumePage;
