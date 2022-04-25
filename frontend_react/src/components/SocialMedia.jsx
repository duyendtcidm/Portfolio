import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsSlack } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://www.facebook.com/profile.php?id=100010414211805"><FaFacebookF /></a>
    </div>
    <div>
      <a href="https://github.com/duyendtcidm"><BsGithub /></a>      
    </div>
    <div>
      <a href="https://twitter.com/Duyendtcidm"><BsTwitter/></a>
    </div>
  </div>
);

export default SocialMedia;