import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import styles from '../static/css/layout/main.module.css';

//import Analytics from '../components/Template/Analytics';
import Navigation from '../components/template/nav';
import SideBar from '../components/template/sidebar';
//import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props: any) => (
  <HelmetProvider>
    <Helmet titleTemplate="%s | William Isaac Trost" defaultTitle="William Isaac Trost" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div className={styles.wrapper} id="wrapper">
      <Navigation />
      <div id="main">
        {props.children}
      </div>
      {props.fullPage ? <SideBar /> : <SideBar />}
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Isaac Trost's personal website.",
};

export default Main;