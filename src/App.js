import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Quizview from './components/Quizview';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Header/>
     <Quizview/>
     <Footer/>
    </div>
  );
}

export default App;
