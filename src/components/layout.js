/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";

import "../styles/index.sass";

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

          <div className="main-container">
            <header>
              <nav className="header-navigation flex-center">
                <div className="nav-left">
                  <ul className="header-nav flex-center helvetica-medium">
                    <li className="nav-item">მთავარი</li>
                    <li className="nav-item">ჩემ შესახებ</li>
                    <li className="nav-item">პროცედურა</li>
                    <li className="nav-item">ნამუშევრები</li>
                  </ul>
                </div>
                <div className="nav-right">
                  <ul className="flex-center helvetica-medium">
                    <li className="nav-item">ხდკ</li>
                    <li className="nav-item bg-white">კონტაქტი</li>
                  </ul>
                </div>
              </nav>
            </header>
            <section id="container" className="section-container flex-center">
              <div className="name-container emberly-black-narrow">
                <span className="name">mariam</span>
                <span className="surname">topuria</span>
              </div>
              <div className="mt-container">
                <img src="/src/images/mariam_topuria.png"/>
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
                    <span className="helvetica-bold">მისამართი</span>
                    <span className="public-sans-light">Lake Adolphus</span>
                  </li>
                  <li className="footer-item flex-center-vertically">
                    <span className="helvetica-bold">ნომერი</span>
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
