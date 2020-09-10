/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { TweenMax } from "gsap";

import "../styles/index.sass";

function parallaxIt(e, target, movement) {
  let $this = document.getElementById("container");
  let relX = e.pageX - $this.offset().left;
  let relY = e.pageY - $this.offset().top;

  // console.log(e.pageX, e.pageY, $this.offset().left, $this.offset().top);

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}

const TemplateWrapper = ({ children }) => {

  const [showMenu, setShowMenu] = useState(false);

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

        <div id='mainContainer' className="main-container">
          <header>
            <nav className="header-navigation flex-center">
              <div className="nav-left">
                <ul className="header-nav flex-center helvetica-medium">
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
                <ul className="flex-center helvetica-medium">
                  <li className="nav-item">FAQ</li>
                  <li className="nav-item bg-white">Contact</li>
                </ul>
              </div>
            </nav>
          </header>
          <section id="container" className="section-container flex-center">
            <div id='nameContainer' className="name-container emberly-black-narrow">
              <span className="name">mariam</span>
              <span className="surname">topuria</span>
            </div>
            <div id='mtContainer' className="mt-container">
              <img src={"/mariam_topuria.png"}/>
            </div>
          </section>
          <footer className="flex-center">
            <div className="footer-section socials">
              <ul className="flex-center">
                <li className="footer-item flex-center-vertically">
                  <span className="helvetica-bold">Instagram</span>
                  <span className="public-sans-light">@skincare</span>
                </li>
                <li className="footer-item flex-center-vertically">
                  <span className="helvetica-bold">Facebook</span>
                  <span className="public-sans-light">@skincaregeorgia</span>
                </li>
              </ul>
            </div>
            <div className="footer-section contact">
              <ul className="flex-center">
                <li className="footer-item flex-center-vertically">
                  <span className="helvetica-bold">Address</span>
                  <span className="public-sans-light">Lake Adolphus</span>
                </li>
                <li className="footer-item flex-center-vertically">
                  <span className="helvetica-bold">Mobile</span>
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

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
