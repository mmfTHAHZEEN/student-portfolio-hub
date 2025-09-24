import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import StudentCard from './components/StudentCard';
import Footer from './components/Footer';
import { studentsData, categories } from './data/studentsData';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter students based on search term and category
  const filteredStudents = useMemo(() => {
    return studentsData.filter(student => {  // FIXED: changed StudentsData to studentsData
      const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           student.skills.some(skill => 
                             skill.toLowerCase().includes(searchTerm.toLowerCase())
                           ) ||
                           student.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || student.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="App">
      <Header />
      
      <SearchFilter 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />
      
      <main className="main-content">
        <div className="container">
          <div className="results-info">
            <h2>Showing {filteredStudents.length} of {studentsData.length} Students</h2>  {/* FIXED: changed StudentsData to studentsData */}
            {selectedCategory !== 'All' && (
              <span className="category-indicator">Category: {selectedCategory}</span>
            )}
          </div>
          
          {filteredStudents.length === 0 ? (
            <div className="no-results">
              <h3>No students found</h3>
              <p>Try adjusting your search or category filter</p>
            </div>
          ) : (
            <div className="students-grid">
              {filteredStudents.map(student => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;