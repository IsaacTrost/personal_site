import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../static/css/layout/sidebar.module.css';
const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar" className={styles.sidebar}>
    <section id="intro">
      <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" className = {styles.image}/>
      <header>
        <h2>William Isaac Trost</h2>
        <p><a href="mailto:wisaactrost@gmail.com">wisaactrost@gmail.com</a></p>
      </header>
    </section>

    <section id="blurb" className={styles.blurb}>
      <h2>About</h2>
      <p>Hi, I am Isaac. I am a computer science and economics double major at NC State University.
        I am a passionate learner, and I am always excited to discover something new!
      </p>
      <ul className="actions">
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
      </ul>
    </section>

    <section id = "footer" className={styles.footer}>
      <p className="copyright">&copy; William Isaac Trost <Link to="/">IsaacTrost.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;