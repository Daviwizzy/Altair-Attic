import React, { useState, useEffect } from 'react';
import './Career.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const Section = ({ title, subtitle, image, altText }) => (
  <div className="section">
    <img src={image} alt={altText} className="section-image" />
    <div className="section-text">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  </div>
);

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="search-bar">
    <input 
      type="text" 
      placeholder="What is your professional field?" 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)} 
    />
    <button>Search</button>
  </div>
);

const JobCard = ({ title, image, altText }) => (
  <div className="job-card">
    <img src={image} alt={altText} className="job-card-image" />
    <p>{title}</p>
  </div>
);

const sections = [
  {
    title: 'Grow With Us',
    subtitle: 'We create champions, celebrate achievements, and nurture potentials.',
    image: 'Hero.jpg', // replace with the actual path
    altText: 'Grow With Us'
  },
  {
    title: 'Fluid and Collaborative Culture',
    subtitle: 'We embrace relentless improvement and champion disruptive innovation.',
    image: 'S1.jpg', // replace with the actual path
    altText: 'Fluid and Collaborative Culture'
  }
];

const jobs = [
  { title: 'Backend Developer', image: 'backdev.jpeg', altText: 'Backend Developer' },
  { title: 'Frontend Developer', image: 'frontdev.jpeg', altText: 'Frontend Developer' },
  { title: 'Full Stack Developer (On-site)', image: 'fullstack.jpeg', altText: 'Full Stack Developer' },
  // { title: 'Growth Manager(Tech)', image: 'growthmanager.jpeg', altText: 'Growth Manager(Tech)' },
  // { title: 'Marketer', image: 'marketer.jpeg', altText: 'Marketer' },
  // { title: 'Regional Business Lead', image: 'regionalbusiness.jpeg', altText: 'Regional Business Lead' },
  // { title: 'Regional Sales Lead', image: 'regionalsales.jpeg', altText: 'Regional Sales Lead' }
];

const Career = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    setFilteredJobs(
      jobs.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="career">
      <Header />
      <div className="career-content">
        <div className="sections">
          {sections.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              subtitle={section.subtitle}
              image={section.image}
              altText={section.altText}
            />
          ))}
        </div>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="job-list">
          {filteredJobs.map((job, index) => (
            <JobCard
              key={index}
              title={job.title}
              image={job.image}
              altText={job.altText}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
