// pages/ResumePage.jsx
import { Timeline, SkillList } from '../components/Resume';
import { educationData, experienceData } from '../helpers/data/content';

const ResumePage = ({ isActive }) => (
  <article className={`resume ${isActive ? 'active' : ''}`} data-page="resume">
    <header>
      <h3 className="h2 article-title">Học vấn</h3>
    </header>
    <Timeline title="Quá trình học tập" icon="education" items={educationData} />
    <Timeline title="Kinh nghiệm" icon="book" items={experienceData} />

    <SkillList />
  </article>
);

export default ResumePage;
