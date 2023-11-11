import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../static/css/layout/nav.module.css';

import Hamburger from './menue';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header id="header" className = {styles.nav}>
    <h1 className={styles.index}>
      {routes.filter((l) => l.index == true).map((l) => (
        <Link key={l.label} to={l.path}>{l.label}</Link>
      ))}
    </h1>
    <nav className={styles.links}>
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <Link to={l.path}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Navigation;