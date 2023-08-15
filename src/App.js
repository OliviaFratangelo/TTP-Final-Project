import React from 'react';
import './App.css';
import Home from "./Components/Home";
import AllPosts from "./Components/AllPosts";
import SingularPost from "./Components/SingularPost";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Letters from Philosophy 💌</h1>
      </header>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/AllPosts" element={<AllPosts />} />
        <Route exact path="/AllPosts/:id" element={<SingularPost />} />
      </Routes>
      </Router>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
