import React from 'react';
import { Row, Col, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { servicesData, hobbiesData } from '../helpers/data/content';
import { useLanguage } from '../helpers/i18n/context';

const SectionTitle = ({ icon, children }) => (
  <div className="section-title">
    <span className="icon-box"><FontAwesomeIcon icon={icon} /></span>
    {children}
  </div>
);

const AboutPage = () => {
  const { t, lang } = useLanguage();
  const services = servicesData(lang);
  const hobbies = hobbiesData(lang);

  return (
    <div className="d-flex flex-column gap-4">
      <div className="card card-glass animate-in animate-d1">
        <div className="p-4 p-md-5">
          <SectionTitle icon="user">{t('about.intro')}</SectionTitle>
          <div className="d-flex align-items-start gap-3 mb-3">
            <div>
              <h5 className="fw-bold mb-2">{t('about.nam')}</h5>
              <span className="mt-3 text-muted"> {t('about.student')}</span>
            </div>
          </div>
          <div style={{ lineHeight: 1.9 }}>
            <p className="mb-2" dangerouslySetInnerHTML={{ __html: t('about.p1') }} />
            <p className="mb-2" dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
            <p className="mb-0" dangerouslySetInnerHTML={{ __html: t('about.p3') }} />
          </div>
        </div>
      </div>

      <div className="card animate-in animate-d2">
        <div className="p-4 p-md-5">
          <SectionTitle icon="code">{t('about.skills')}</SectionTitle>
          <Row className="g-3">
            {services.map((service, i) => (
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
          <SectionTitle icon="music">{t('about.hobbies')}</SectionTitle>
          <Carousel
            interval={3000}
            pause="hover"
            className="hobby-carousel"
            indicators={true}
            prevIcon={<span style={{ fontSize: '0.8rem' }}>&#10094;</span>}
            nextIcon={<span style={{ fontSize: '0.8rem' }}>&#10095;</span>}
          >
            {[...Array(Math.ceil(hobbies.length / 2))].map((_, slideIdx) => (
              <Carousel.Item key={slideIdx}>
                <Row className="g-3 justify-content-center">
                  {hobbies.slice(slideIdx * 2, slideIdx * 2 + 2).map((hobby, i) => (
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
          <SectionTitle icon="bullseye">{t('about.orientation')}</SectionTitle>
          <Row className="g-3">
            <Col md={6}>
              <div className="orient-item">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="service-icon" style={{ width: 36, height: 36, fontSize: '0.85rem' }}>
                    <FontAwesomeIcon icon="bullseye" />
                  </span>
                  <h6 className="fw-bold mb-0">{t('about.shortTerm')}</h6>
                </div>
                <div style={{ paddingLeft: 0 }}>
                  {[t('about.short1'), t('about.short2'), t('about.short3')].map((item, i) => (
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
                  <h6 className="fw-bold mb-0">{t('about.longTerm')}</h6>
                </div>
                <div style={{ paddingLeft: 0 }}>
                  {[t('about.long1'), t('about.long2'), t('about.long3')].map((item, i) => (
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
};

export default AboutPage;
