import React from 'react'

import { AppWrap } from '../../wrapper';
import './About.scss'

const About = () => {
  return (
    <>
    <h2 className="head-text">I Think <span>Happiness</span> <br />means  <span>Sharing & Giving </span></h2>
    <p className='about-detail'>A senior student at Hanoi University of Science and Technology with a strong interest in Web Development. 
      I am an ambitious, hard-working, and aggressive learner who believes we have to appreciate each moment to deserve this life. 
      <br />
      <br />
      I am happy to connect with recruiters, friends, community program leads, and anyone who shares some of my interests!
      I'm currently looking for internships in Japan where I really want to work after graduation!
      <br />
      <br />
      Besides coding, I would like to participate in social activities that are meaningful to the community.
      Especially, activities that give chance to share the things I have known. 
      </p>
      {/* Resume link
      <a href=""></a> */}
    </>
  )
}

export default AppWrap(About, 'about')                                                                                                                                                                                     