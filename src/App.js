import React from 'react';
import './App.css';
import Avatar from './components/avatar/Avatar';
import StudentInfo from './components/StudentInfo/StudentInfo';
import CourseCard from './components/CourseCard/CourseCard.js';

function App() {
  let data = 
  [
      {
          title : 'HTML Foundation',
          description : 'Learn HTML Fundamental',
          Image : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
      },
      {
          title : 'CSS Foundation',
          description : 'Learn CSS Fundamental',
          Image : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
      },
  ];

  return (
    <div className="Container">
      <div className="Student">
        <div className="Avatar"><Avatar /></div>
        <StudentInfo />
      </div>
      <div className="courses-my"><h2>MY COURSES</h2></div>
      <div className="courses-main">
        <CourseCard data={data} className="courses-main"/>
      </div>
    </div>

  );
}

export default App;
