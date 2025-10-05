import React from 'react';
import { skillsData } from '../helpers/data/content';
import { icons } from '../helpers/icons/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Timeline Component
export const Timeline = ({ title, icon, items }) => (
  <section className="timeline">
    <div className="title-wrapper">
      <div className="icon-box">
        <FontAwesomeIcon icon={icons[icon]} />
      </div>
      <h3 className="h3">{title}</h3>
    </div>

    <ol className="timeline-list">
      {items.map((item, index) => (
        <li key={index} className="timeline-item">
          <h4 className="h4 timeline-item-title">{item.title}</h4>
          <span>{item.period}</span>

          {/* Nếu có item.details thì render list chi tiết */}
          {item.details ? (
            <ul className="timeline-details">
              {item.details.map((d, i) => (
                <li key={i}>
                  <strong>{d.title}</strong> {d.content}
                </li>
              ))}
            </ul>
          ) : (
            <p className="timeline-text">{item.text}</p>
          )}
        </li>
      ))}
    </ol>
  </section>
);


// Skill List Component
export const SkillList = () => (
  <section className="skill">
    <h3 className="h3 skills-title">Những kỹ năng của tôi</h3>
    <ul className="skills-list content-card">
      {skillsData.map((skill, index) => (
        <li key={index} className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">{skill.name}</h5>
            <data value={skill.value}>{skill.value}%</data>
          </div>
          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: `${skill.value}%` }}></div>
          </div>
        </li>
      ))}
    </ul>
  </section>
);