import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

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
      <footer className="fixed-bottom">
        <p>Footer</p>
      </footer>
    </Menu>

  );
};