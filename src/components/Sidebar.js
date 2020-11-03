import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'

export default props => {
  return (
    <Menu right >
      <a className="menu-item font-weight-normal" href="/">
        HOME
      </a>
      <a className="menu-item font-weight-normal" href="#">
        NATIVE STORE
      </a>
      <a className="menu-item font-weight-normal" href="#">
        LEAF
      </a>
      <a className="menu-item font-weight-normal" href="#">
        OUT PROJECTS
      </a>
      <a className="menu-item font-weight-normal" href="#">
        CONTACT US
      </a>
      <div className="menu-item footer" >
          <p>
           <a href="">Log In</a> 
          </p>
          <p>
           <a href="#"><strong>REGISTER</strong></a> 
          </p>
          <p class="text-center">
             FOLLOW US
          </p>
          <ul class="social-network social-circle">
             <li><a href="#" class="icoFacebook" title="Facebook"><i><FontAwesomeIcon icon={faFacebook} size="lg"/></i></a></li>
             <li><a href="#" class="icoInstagram" title="Instagram"><i><FontAwesomeIcon icon={faInstagram} size="lg"/></i></a></li>
             <li><a href="#" class="icoTwitter" title="Twitter"><i><FontAwesomeIcon icon={faTwitter} size="lg"/></i></a></li>
          </ul>				
        </div>
    </Menu>

  );
};