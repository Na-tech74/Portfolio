import React from 'react';
import { ListGroup, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { userData } from '../helpers/data/content';
import { images } from '../helpers/data/images';
import { useLanguage } from '../helpers/i18n/context';

const contactTitleKeys = {
  "Email": "sidebar.email",
  "SĐT": "sidebar.phone",
  "Ngày sinh": "sidebar.birth",
  "Địa chỉ": "sidebar.address",
};

const Sidebar = () => {
  const { t } = useLanguage();

  return (
    <div className="sidebar-card animate-in">
      <div className="p-4 text-center">
        <div className="avatar-wrap mb-3">
          <img src={images.avatar} alt="avatar" className="avatar shadow-sm" />
        </div>

        <h5 className="fw-bold mb-1">{userData.name}</h5>
        <span className="text-muted d-inline-block mb-3" style={{ fontSize: '0.8rem', letterSpacing: '0.3px' }}>{userData.title}</span>

        <div className="d-flex justify-content-center gap-3 mb-3">
          <div>
            <div className="gradient-text fw-bold" style={{ fontSize: '1.3rem' }}>3+</div>
            <div className="text-muted" style={{ fontSize: '0.7rem' }}>{t('sidebar.projects')}</div>
          </div>
          <div className="vr opacity-25" />
          <div>
            <div className="gradient-text fw-bold" style={{ fontSize: '1.3rem' }}>3+</div>
            <div className="text-muted" style={{ fontSize: '0.7rem' }}>{t('sidebar.technologies')}</div>
          </div>
        </div>

        <hr className="my-3" style={{ opacity: 0.1 }} />

        <ListGroup variant="flush" className="text-start">
          {userData.contacts.map((contact, i) => (
            <ListGroup.Item key={i} className="d-flex align-items-center gap-3 px-0 py-2 border-0 bg-transparent">
              <div style={{
                width: 34, height: 34, borderRadius: 10,
                background: 'var(--primary-bg)', color: 'var(--primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.8rem', flexShrink: 0
              }}>
                <FontAwesomeIcon icon={contact.icon} />
              </div>
              <div className="small flex-grow-1" style={{ minWidth: 0 }}>
                <div style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-muted)' }}>
                  {t(contactTitleKeys[contact.title] || contact.title)}
                </div>
                <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: '0.85rem' }}>
                  {contact.link ? (
                    <a href={contact.link} className="contact-link">{contact.text}</a>
                  ) : contact.isAddress ? (
                    <span>{contact.text}</span>
                  ) : contact.isTime ? (
                    <time dateTime={contact.dateTime}>{contact.text}</time>
                  ) : (
                    <span>{contact.text}</span>
                  )}
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>

        <hr className="my-3" style={{ opacity: 0.1 }} />

        <Stack direction="horizontal" gap={2} className="justify-content-center">
          {userData.socials.map((social, i) => (
            <a key={i} href={social.url} className="social-link" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default Sidebar;
