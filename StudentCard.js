import React from 'react';
import { FaExternalLinkAlt, FaStar, FaCode } from 'react-icons/fa';
import '../styles/StudentCard.css';

const StudentCard = ({ student }) => {
  return (
    <div className={`student-card ${student.featured ? 'featured' : ''}`}>
      {student.featured && (
        <div className="featured-badge">
          <FaStar className="featured-icon" />
          Featured
        </div>
      )}
      
      <div className="card-image">
        <img src={student.image} alt={student.name} />
        <div className="category-tag">{student.category}</div>
      </div>
      
      <div className="card-content">
        <h3 className="student-name">{student.name}</h3>
        <p className="student-description">{student.description}</p>
        
        <div className="skills-section">
          <h4 className="skills-title">
            <FaCode className="skills-icon" />
            Skills
          </h4>
          <div className="skills-list">
            {student.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <a 
          href={student.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="website-link"
        >
          <FaExternalLinkAlt className="link-icon" />
          Visit Portfolio
        </a>
      </div>
    </div>
  );
};

export default StudentCard;