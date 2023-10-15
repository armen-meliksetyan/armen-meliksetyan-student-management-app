import React, {  } from "react";
import "./App.css";
 
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import View from "./components/View";
import Edit from "./components/Edit";
import NavBar from './components/NavBar';
import AddStudent from "./components/AddStudent";
 
function App() {
  return (
    <div className="App">
      <NavBar/>
        <Router>
            <Routes>
            <Route exact path="/add" element={<AddStudent/>}/>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/view/:id" element={<View/>}/>
              <Route exact path="/edit/:id" element={<Edit/>}/> 
            </Routes>
        </Router>
    </div>
  );
}
 
export default App;