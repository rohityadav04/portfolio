import React from "react";
import "./portfolio.css";
import Portfolio1 from "../../assets/portfolio1.png";
import Portfolio2 from "../../assets/2.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Portfolio1} alt="" />
            <h3>Real Estate Web App Using Reactjs</h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/rohityadav04/realestate-react"
                className="btn"
              >
                Github
              </a>
              <a
                href="https://realestate-react-alpha.vercel.app/"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Portfolio2} alt="" />
            <h3>Royal Enfield Web App Using Javascript </h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/rohityadav04/https---github.com-rohityadav04-Anjuli-Automobiles"
                className="btn"
              >
                Github
              </a>
              <a
                href="https://https-github-com-rohityadav04-anjuli-automobiles.vercel.app/"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Portfolio1} alt="" />
            <h3>Real Estate Web App Using Reactjs</h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/rohityadav04/realestate-react"
                className="btn"
              >
                Github
              </a>
              <a
                href="https://realestate-react-alpha.vercel.app/"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Portfolio1} alt="" />
            <h3>Real Estate Web App Using Reactjs</h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/rohityadav04/realestate-react"
                className="btn"
              >
                Github
              </a>
              <a
                href="https://realestate-react-alpha.vercel.app/"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Portfolio1} alt="" />
            <h3>Real Estate Web App Using Reactjs</h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/rohityadav04/realestate-react"
                className="btn"
              >
                Github
              </a>
              <a
                href="https://realestate-react-alpha.vercel.app/"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Portfolio1} alt="" />
            <h3>Real Estate Web App Using Reactjs</h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/rohityadav04/realestate-react"
                className="btn"
              >
                Github
              </a>
              <a
                href="https://realestate-react-alpha.vercel.app/"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
