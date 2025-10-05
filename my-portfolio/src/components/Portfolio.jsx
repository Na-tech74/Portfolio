// ====================================
import { icons } from "../helpers/icons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Project Filter Component
export const ProjectFilter = ({ filters, selectedFilter, onFilterChange }) => (
  <ul className="filter-list">
    {filters.map(filter => (
      <li key={filter} className="filter-item">
        <button
          className={selectedFilter === filter ? 'active' : ''}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      </li>
    ))}
  </ul>
);

// Project Item Component
const ProjectItem = ({ title, category, image, link }) => {
  const handleCheckLink = (event) => {
    if (!link) {
      event.preventDefault();
      alert("link chưa được cập nhật!");
    }
  }
  return (
    <li className="project-item active">
      <a href={link || "#"} 
      className="project-link" 
      onClick={handleCheckLink} 
      target="_blank" rel="noopener noreferrer">
        <figure className="project-img">
          <div className="project-item-icon-box">
            <FontAwesomeIcon icon={icons.eye} />
          </div>
          <img src={image} alt={title} loading="lazy" />
        </figure>
        <h3 className="project-title">{title}</h3>
        <p className="project-category">{category}</p>
      </a>
    </li>
  );
};
// Project List Component
export const ProjectList = ({ projects }) => (
  <ul className="project-list">
    {projects.map((project, index) => (
      <ProjectItem key={index} {...project} />
    ))}
  </ul>
);
