// import logo from '../../.';
import React, { useState } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import DetailEmployee from '../DetailEmployee';
import './App.css';

function App() {
  const [selectedEmployee, setEmployee] = useState(0);

  const setActiveEmployee = index => {
    setEmployee(index)
  }

  return (
    <div className="App">
      <Header />
      <Sidebar setEmployee={setActiveEmployee} selectedEmployee={selectedEmployee} />
      <DetailEmployee selectiveEmployee={selectedEmployee} />
    </div>
  );
}

export default App;
