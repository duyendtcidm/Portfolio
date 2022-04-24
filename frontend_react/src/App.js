import React from 'react';

import { About, Footer, Header, Contact, Projects, Skill, Testimonial} from './container';
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skill />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;