import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="header-title">
            <span className="header-icon">🚀</span>
            Student Portfolio Hub
          </h1>
          <p className="header-subtitle">
            Discover amazing projects from our talented students
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;