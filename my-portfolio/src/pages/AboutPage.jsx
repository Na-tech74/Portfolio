// pages/AboutPage.jsx
import React from 'react';
import { ServiceList, HobbiesList, Orientation } from '../components/About.jsx';

const AboutPage = ({ isActive }) => (
  <article className={`about ${isActive ? 'active' : ''}`} data-page="about">
    <header>
      <h3 className="h2 article-title">Giới thiệu bản thân</h3>
    </header>

    <section className="about-text">
      <p>
        Xin chào, tôi là <strong>Nam Nguyễn</strong> – một sinh viên IT với niềm đam mê lớn trong lĩnh vực phát triển phần mềm.
        Tôi tập trung nhiều vào <strong>Frontend Development</strong> với React, đồng thời cũng đang tìm hiểu sâu về
        <strong>Backend (FastAPI, Flask)</strong> và AI (Ollama, Mistral, fine-tuning).
      </p>

      <p>
        Tôi đã xây dựng nhiều dự án như <strong>chatbot AI</strong> với React + FastAPI, hệ thống <strong>authentication với JWT & SQLAlchemy</strong>,
        cũng như các bài lab thực hành về <strong>ảo hóa lưu trữ (Windows Server, VMware, iSCSI SAN), MongoDB MapReduce</strong>.
        Ngoài ra tôi cũng có kinh nghiệm làm việc với <strong>Docker</strong> và môi trường <strong>Linux</strong> để triển khai và quản lý ứng dụng.
      </p>

      <p>
        Tôi đã từng làm việc với nhiều ngôn ngữ và công nghệ như <strong>JavaScript, Python, Java, SQL</strong> cùng các framework và thư viện phổ biến
        như <strong>React, FastAPI, Flask, SQLAlchemy</strong>. Bên cạnh đó, tôi cũng quan tâm đến <strong>DevOps cơ bản</strong> và tối ưu hoá hệ thống.
      </p>

      <p>
        Với định hướng trở thành một <strong>Fullstack Developer</strong>, tôi luôn học hỏi để cải thiện kỹ năng,
        không chỉ về công nghệ frontend/backend mà còn về <strong>cấu trúc dự án, tối ưu code, bảo mật và trải nghiệm người dùng</strong>.
        Mục tiêu của tôi là phát triển các giải pháp phần mềm sáng tạo, vừa hiệu quả vừa thân thiện với người dùng.
      </p>

    </section>

    <ServiceList />
    <HobbiesList />
    <Orientation />
  </article>
);

export default AboutPage;
