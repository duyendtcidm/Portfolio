import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import { images } from '../../constant';

import './Skill.scss'

const skills = [
  {
    name: 'HTML',
    img: images.html,
  },
  {
    name: 'CSS',
    img: images.css,
  },{
    name: 'Js',
    img: images.javascript,
  },{
    name: 'React',
    img: images.react,
  },{
    name: 'Java',
    img: images.java,
  },{
    name: 'Git',
    img: images.git,
  },
];

const Skill = () => {
  return (
    <>
    <h2 className="head-text">Skills & Experiences</h2>
    <div className='app__skill-container'>
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.img} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
    </div>
    </>
    
  )
}

export default AppWrap(Skill, 'skill')