import React from 'react';

import { About, Footer, Header, Contact, Projects, Skill, Testimonial } from './container';
import { Navbar } from "./components";
import './App.scss';

const App = () => ( 
  <div className='app'>
    <Navbar/>
    <Header/>     
    <About/>
    <Skill/>
    <Projects/>      
  </div>
);


export default App;