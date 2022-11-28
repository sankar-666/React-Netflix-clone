// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {action,commedy,documentry,horror,originals, romance} from './urls'
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
// import { BrowserRouter as Router,Route,Routes ,Link} from 'react-router-dom';
// import Login from './pages/Login/Login';
// import Signup from './pages/SIgnup/Signup';

function App() {

  
  return (
    
    <div className="App">
      
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title="Netflix Originals" />
     {/* <RowPost url={horror} title="Netflix Originals" /> */}
     <RowPost url={romance} title="Romance" isSmall />
     <RowPost  url={action} title="Action" isSmall />
     <RowPost url={commedy} title="Comedy" isSmall />
     <RowPost  url={horror} title="Horror" isSmall />
     <RowPost url={documentry} title="Documentary" isSmall />

   
    </div>
  );
}

export default App;
