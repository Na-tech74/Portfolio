import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../helpers/icons/icons';

const ContactPage = () => {
  const [form, setForm] = useState({ fullname: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Message sent successfully!');
    setForm({ fullname: '', email: '', message: '' });
  };

  return (
    <div className="d-flex flex-column gap-4">
      <div className="card animate-in animate-d1">
        <div className="p-4 p-md-5">
          <div className="section-title">
            <span className="icon-box"><FontAwesomeIcon icon="location-dot" /></span>
            Vị trí
          </div>
          <div className="ratio ratio-16x9 rounded-3 overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.3652029854666!2d106.69204877405487!3d10.85980288929406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529c17978287d%3A0xec48f5a17b7d5741!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOZ3V54buFbiBU4bqldCBUaMOgbmggLSBDxqEgc-G7nyBxdeG6rW4gMTI!5e0!3m2!1svi!2s!4v1759577231870!5m2!1svi!2s"
              width="600" height="450" loading="lazy" style={{ border: 0 }}
              title="map"
            />
          </div>
        </div>
      </div>

      <div className="card animate-in animate-d2">
        <div className="p-4 p-md-5">
          <div className="section-title">
            <span className="icon-box"><FontAwesomeIcon icon={icons.paperPlane} /></span>
            Liên hệ
          </div>
          <Form onSubmit={handleSubmit}>
            <Row className="g-3 mb-3">
              <Col md={6}>
                <Form.Control
                  type="text"
                  name="fullname"
                  placeholder="Họ tên"
                  value={form.fullname}
                  onChange={handleChange}
                  required
                  className="form-control-custom"
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="form-control-custom"
                />
              </Col>
            </Row>
            <Form.Control
              as="textarea"
              rows={4}
              name="message"
              placeholder="Nội dung"
              value={form.message}
              onChange={handleChange}
              required
              className="form-control-custom mb-3"
            />
            <button
              type="submit"
              disabled={!form.fullname || !form.email || !form.message}
              className="btn btn-gradient rounded-pill px-4 fw-semibold d-inline-flex align-items-center gap-2"
              style={{ padding: '10px 24px', fontSize: '0.9rem' }}
            >
              <FontAwesomeIcon icon={icons.paperPlane} />
              Gửi tin nhắn
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
