import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/SIgnup/Signup';
import Cover from './components/Cover/CoverBody/Cover';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
    <Router>
      
      <Routes>
      {/* <Route element={<Cover/>}   path='/'/> */}
        <Route element={<App/>}  path='/'/>
        <Route element={<Login/>}  path='/login'>
         </Route>
         <Route element={<Signup/>}  path='/signup'/>
      </Routes>
      </Router>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
