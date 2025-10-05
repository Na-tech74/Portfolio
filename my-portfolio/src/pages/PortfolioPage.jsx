// pages/PortfolioPage.jsx
import React, { useState } from 'react';
import { ProjectFilter, ProjectList } from '../components/Portfolio';
import { projectsData } from '../helpers/data/content';

const PortfolioPage = ({ isActive }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const filters = ['All', 'Web design', 'Applications', 'Web development', 'Datasets', 'Shared projects & Documents'];

  const filteredProjects = selectedFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedFilter);

  return (
    <article className={`portfolio ${isActive ? 'active' : ''}`} data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ProjectFilter 
          filters={filters} 
          selectedFilter={selectedFilter} 
          onFilterChange={setSelectedFilter} 
        />
        <ProjectList projects={filteredProjects} />
      </section>
    </article>
  );
};

export default PortfolioPage;