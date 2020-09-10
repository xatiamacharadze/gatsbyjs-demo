/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { Component, useRef } from "react";
import PropTypes from "prop-types";
// import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
// import { HelmetDatoCms } from "gatsby-source-datocms";
import { TweenMax } from "gsap";

import "../styles/index.sass";

const TemplateWrapper1 = ({ children }) => {

  // const [showMenu, setShowMenu] = useState(false);
  const [container, nameContainer, mtContainer, mainContainer] = useRef();

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
              }
            }
          }
        }
      `}

      render={data => (

        <div ref={mainContainer} className="main-container">
          <header>
            <nav className="header-navigation flex-center">
              <div className="nav-left">
                <ul className="header-nav flex-center public-sans-thin bolder fc-black">
                  <li className="nav-item">Main</li>
                  <li className="nav-item">About me</li>
                  <li className="nav-item">Procedures</li>
                  <li className="nav-item">Works</li>
                </ul>
              </div>
              <div className="mt-logo bg-white flex-center">
                <span className="emberly-black fs-40 fc-black">MT</span>
              </div>
              <div className="nav-right">
                <ul className="flex-center public-sans-thin bolder fc-black">
                  <li className="nav-item">FAQ</li>
                  <li className="nav-item bg-white">Contact</li>
                </ul>
              </div>
            </nav>
          </header>
          <section ref={container} className="section-container flex-center">
            <div ref={nameContainer} className="name-container emberly-black-narrow">
              <span className="name">mariam</span>
              <span className="surname">topuria</span>
            </div>
            <div ref={mtContainer} className="mt-container">
              <img src={"/mariam_topuria.png"} alt=""/>
            </div>
          </section>
          <footer className="flex-center">
            <div className="footer-section socials">
              <ul className="flex-center">
                <li className="footer-item flex-center-vertically fc-black">
                  <span className="public-sans-thin bolder">Instagram</span>
                  <span className="public-sans-light">@skincare</span>
                </li>
                <li className="footer-item flex-center-vertically fc-black">
                  <span className="public-sans-thin bolder">Facebook</span>
                  <span className="public-sans-light">@skincaregeorgia</span>
                </li>
              </ul>
            </div>
            <div className="footer-section contact">
              <ul className="flex-center">
                <li className="footer-item flex-center-vertically fc-black">
                  <span className="public-sans-thin bolder">Address</span>
                  <span className="public-sans-light">Lake Adolphus</span>
                </li>
                <li className="footer-item flex-center-vertically fc-black">
                  <span className="public-sans-thin bolder">Mobile</span>
                  <span className="public-sans-light">599 98 98 98</span>
                </li>
              </ul>
            </div>
          </footer>
        </div>

      )}
    />

  );
};

TemplateWrapper1.propTypes = {
  children: PropTypes.object
};

// export default TemplateWrapper1;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
// const [container, nameContainer, mtContainer, mainContainer] = useRef();


export default class TemplateWrapper extends Component {

  container = null;
  nameContainer = null;
  mtContainer = null;
  mainContainer = null;

  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.nameContainer = React.createRef();
    this.mtContainer = React.createRef();
    this.mainContainer = React.createRef();

  }

  parallaxIt(e, target, movement) {
    let $this = document.getElementById('container').getBoundingClientRect();

    let relX = e.pageX - $this.left;
    let relY = e.pageY - $this.top;


    TweenMax.to(target, 1, {
      x: (relX - $this.width / 2) / $this.width * movement,
      y: (relY - $this.height / 2) / $this.height * movement
    });
  }


  componentDidMount() {
    document.addEventListener('mousemove', (e) => {
      this.parallaxIt(e, '#nameContainer', 5);
      this.parallaxIt(e, '#mtContainer', -10);
    });

  }

  render() {

    return <div ref={this.mainContainer} id="mainContainer" className="main-container">
      <header>
        <nav className="header-navigation flex-center">
          <div className="nav-left">
            <ul className="header-nav flex-center public-sans-thin bolder fc-black">
              <li className="nav-item">Main</li>
              <li className="nav-item">About me</li>
              <li className="nav-item">Procedures</li>
              <li className="nav-item">Works</li>
            </ul>
          </div>
          <div className="mt-logo bg-white flex-center">
            <span className="emberly-black fs-40 fc-black">MT</span>
          </div>
          <div className="nav-right">
            <ul className="flex-center public-sans-thin bolder fc-black">
              <li className="nav-item">FAQ</li>
              <li className="nav-item bg-white">Contact</li>
            </ul>
          </div>
        </nav>
      </header>
      <section ref={this.container} id="container" className="section-container flex-center">
        <div ref={this.nameContainer} id="nameContainer" className="name-container emberly-black-narrow">
          <span className="name">mariam</span>
          <span className="surname">topuria</span>
        </div>
        <div ref={this.mtContainer} id="mtContainer" className="mt-container">
          <img src={"/mariam_topuria.png"} alt=""/>
        </div>
      </section>
      <footer className="flex-center">
        <div className="footer-section socials">
          <ul className="flex-center">
            <li className="footer-item flex-center-vertically fc-black">
              <span className="public-sans-thin bolder">Instagram</span>
              <span className="public-sans-light">@skincare</span>
            </li>
            <li className="footer-item flex-center-vertically fc-black">
              <span className="public-sans-thin bolder">Facebook</span>
              <span className="public-sans-light">@skincaregeorgia</span>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <ul className="flex-center">
            <li className="footer-item flex-center-vertically fc-black">
              <span className="public-sans-thin bolder">Address</span>
              <span className="public-sans-light">Lake Adolphus</span>
            </li>
            <li className="footer-item flex-center-vertically fc-black">
              <span className="public-sans-thin bolder">Mobile</span>
              <span className="public-sans-light">599 98 98 98</span>
            </li>
          </ul>
        </div>
      </footer>
    </div>;

    // )}
  }
}