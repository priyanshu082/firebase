import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css';
import { Login } from './Pages/login';
import { Main } from './Pages/main/main';
import { Navbar } from "./components/navbar"
import { CreatePost } from './Pages/create-post/create-post';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/createpost" element={<CreatePost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
