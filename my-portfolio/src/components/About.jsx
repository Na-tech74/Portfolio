import React from 'react';
import { servicesData, hobbiesData  } from '../helpers/data/content';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Service Item Component
const ServiceItem = ({ icon, title, text }) => (
  <li className="service-item">
    <div className="service-icon-box">
      <FontAwesomeIcon icon={icon} size="2x" />
    </div>
    <div className="service-content-box">
      <h4 className="h4 service-item-title">{title}</h4>
      <p className="service-item-text">{text}</p>
    </div>
  </li>
);
// Service List Component
export const ServiceList = () => (
  <section className="service">
    <h3 className="h3 service-title">Kỹ năng IT</h3>
    <ul className="service-list">
      {servicesData.map((service, index) => (
        <ServiceItem key={index} {...service} />
      ))}
    </ul>
  </section>
);
// Hobbies Item Component
 export const HobbiesItem = ({ name, icon , description }) => (
  <li className="hobbies-item">
    <div className="content-card">
      <figure className="hobbies-avatar-box">
        <div className="hobbies-icon-box">
          <FontAwesomeIcon icon={icon} size="2x" />
        </div>
      </figure>

      <h4 className="h4 hobbies-item-title">{name}</h4>

      <div className="hobbies-text">
        <p>{description}</p>
      </div>

    </div>
  </li>
);

// Hobbies List Component
export const HobbiesList = () => (
  <section className="hobbies">
    <h3 className="h3 hobbies-title">Sở thích cá nhân</h3>
    <ul className="hobbies-list has-scrollbar">
      {hobbiesData.map((hobby, index) => (
        <HobbiesItem key={index} {...hobby} />
      ))}
    </ul>
  </section>
);

// Orientation List Component
export const Orientation = () => (
  <section className="orientation">
    <h3 className="h3 orientation-title">Định hướng trong tương lai</h3>

    <ul className="orientation-list has-scrollbar">
      <li className="orientation-item">
        <h4><i className="fas fa-bullseye"></i> Mục tiêu ngắn hạn</h4>
        <p>
          - Hoàn thiện kỹ năng lập trình Frontend với React, TypeScript và SCSS. <br />
          - Xây dựng các dự án cá nhân để rèn luyện kỹ năng thực tế. <br />
          - Học thêm về Backend với FastAPI và Node.js để phát triển fullstack cơ bản.
        </p>
      </li>

      <li className="orientation-item">
        <h4><i className="fas fa-rocket"></i> Mục tiêu dài hạn</h4>
        <p>
          - Trở thành lập trình viên Frontend chuyên nghiệp, có khả năng đảm nhiệm các dự án lớn. <br />
          - Làm việc trong môi trường sáng tạo, có cơ hội học hỏi công nghệ mới như AI và hệ thống web thông minh. <br />
          - Hướng tới vị trí Fullstack Developer hoặc Software Engineer trong tương lai.
        </p>
      </li>
    </ul>
  </section>
);

