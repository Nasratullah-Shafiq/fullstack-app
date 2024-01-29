import React from 'react';
import Navbar from './components/Navbar.jsx';
import MyRouter from './router/index.js';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
function App() { 
  return (
    <div className ="App">
      
      <Navbar />
      <MyRouter />
    </div>
  );
}

export default App;