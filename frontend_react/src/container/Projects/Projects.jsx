import React, {useState, useEffect} from 'react';
import { AiFillEye, AiFillGithub} from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
// import { urlFor, client} from '../../client';

import './Projects.scss';
import { images } from '../../constant';

const projects = [
  {
    title: 'Upscale image', 
    description: 'The application supports image sharpening. Users can register or use it without an account. Users can upload photos and select sharpening levels and then download a zip file. Image processing is written in Python to help sharp images. The user events part uses Js and PHP to handle.', 
    imgUrl: images.project01,
    linkgit: 'https://github.com/duyendtcidm/IT4552_LTW_Team2',
  },
  {
    title: 'Uno games', 
    description: 'I used the knowledge I learned in network programming to create this application. Before players join the game will be registered the data and stored in a linked list, to control the number of players and scorers. Using socket programming, TCP/IP connection to exchange card information between players through the server.', 
    imgUrl: images.project02,
    linkgit: 'https://github.com/duyendtcidm/Uno',
  },
];

const Projects = () => {  
  return (    
    <>
      <h2 className="head-text">My recent <span>Porfolio </span>work</h2>
      <div className="app__profiles">
        {projects.map((project, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={project.title + index}
          >
            <img src={project.imgUrl} alt={project.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{project.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{project.description}</p>
            <a href={project.linkgit}>Link github</a>
          </motion.div>
        ))}
      </div>

    </>
  );
};

export default AppWrap(Projects, 'project');