import React from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import '../styles/SearchFilter.css';

const SearchFilter = ({ 
  searchTerm, 
  onSearchChange, 
  selectedCategory, 
  onCategoryChange, 
  categories 
}) => {
  return (
    <div className="search-filter">
      <div className="container">
        <div className="search-filter-content">
          {/* Search Bar */}
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search students by name or skills..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Category Filter */}
          <div className="filter-box">
            <FaFilter className="filter-icon" />
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="category-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;