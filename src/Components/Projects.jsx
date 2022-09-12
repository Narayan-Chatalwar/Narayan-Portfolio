import React, { useEffect } from "react";
import styles from "./Projects.module.css";
import bebodywiselogo from "../Atributes/bebodywise.png";
import natureslogo from "../Atributes/naturesbasket.png";
import smallcaselogo from "../Atributes/smallcase.png";
import wetubelogo from "../Atributes/wetube.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 6000 });
  }, []);

  return (
    <div id="projects">
      <div className={styles.mainprojectscontainer}>
        <div className={styles.headunderproje}>
          <h1 className={styles.headingproje}>Projects</h1>
          <div className={styles.underlineproje}></div>
        </div>
        <div className={styles.mainproje}>
          <div className={styles.leftproje}>
            <div className={styles.projecard} data-aos="zoom-out-right">
              <img
                className={styles.projeimage}
                src={bebodywiselogo}
                data-aos="flip-right"
                alt=""
              />
              <div className={styles.headingpara}>
                <h4>Inspired from BeBodywise.com</h4>
                <p style={{ textAlign: "justify" }}>
                  Bebodywise.com is a website where you can get all products
                  related to women's health care. You can also get a specialized
                  doctor's consultation, and also so many reword by referring to
                  this website. Functionalities - landing page, scroll bars,
                  login, signup, products page, product detail page, cart page,
                  checkout page, payment detail page, Refer and Earn section,
                  Doctors consultation section, Wellness assessment section.
                  <br />
                  <strong> Tech-Stacks used -</strong> HTML, CSS, JAVASCRIPT,
                  BOOTSTRAP <br /> <strong>Tools -</strong> GitHub,VS code,
                  Netlify
                  <br />
                  <strong>My tasks - </strong> To build overall json data as
                  well as with some front page div and some pages like refer and
                  earn.
                </p>
                <a
                  href="https://github.com/rahulsinha1996/Project-Bebodywise"
                  target="_blank"
                >
                  <button className={styles.codebutton}>Code</button>
                </a>
                <a
                  href="https://condescending-ardinghelli-8e76b9.netlify.app/"
                  target="_blank"
                >
                  <button className={styles.livebutton}>Live</button>
                </a>
              </div>
            </div>
            <div className={styles.projecard} data-aos="zoom-out-right">
              <img
                className={styles.projeimage}
                src={natureslogo}
                data-aos="flip-right"
                alt=""
              />
              <div className={styles.headingpara}>
                <h4>Inspired from Naturesbasket.com</h4>
                <p style={{ textAlign: "justify" }}>
                  Natures basket is one of the popular online grocery stores in
                  India. where you will get all different kinds of products like
                  fruits, daily vegetables, health care products, organic
                  products, frozen products, snacks, cold drinks, meat, and
                  instant meals. Functionalities - landing page, scroll bars,
                  login, signup, products page, product detail page, cart page
                  <br /> <strong>Tech-Stacks used -</strong> HTML, CSS,
                  JAVASCRIPT, BOOTSTRAP, REACT JS, REDUX, Material UI <br />
                  <strong>Tools -</strong>
                  GitHub,VS code, Netlify
                  <br />
                  <strong>My tasks - </strong> To build the overall Food and
                  vegitables section with the product detail page and various
                  filters for variety of products.
                </p>
                <a
                  href="https://github.com/chhavi48/clone-of-Natures-Basket"
                  target="_blank"
                >
                  <button className={styles.codebutton}>Code</button>
                </a>
                <a href="https://naturebasket-cw.netlify.app/" target="_blank">
                  <button className={styles.livebutton}>Live</button>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.rightproje}>
            <div className={styles.projecard} data-aos="zoom-out-right">
              <img
                className={styles.projeimage}
                src={smallcaselogo}
                data-aos="flip-right"
                alt=""
              />
              <div className={styles.headingpara}>
                <h4>Inspired from Smallcase.com</h4>
                <p style={{ textAlign: "justify" }}>
                  smallcase.com is a website where you can get the portfolios of
                  stocks or ETFs, weighted intelligently to track a theme,
                  strategy, or objective. Functionalities - landing page, scroll
                  bars, login, signup, products page, product detail page, cart
                  page, checkout page, payment detail page.
                  <br /> <strong>Tech-Stacks used -</strong>
                  HTML, CSS, JAVASCRIPT, BOOTSTRAP. <br />
                  <strong>Tools - </strong>
                  GitHub,VS code, Netlify
                  <br />
                  <strong>My tasks - </strong> To build the footer part of the
                  website by using various clickable links. and some cool alert
                  animations.
                </p>
                <a
                  href="https://github.com/Narayan-Chatalwar/Smallcase.com-clone"
                  target="_blank"
                >
                  <button className={styles.codebutton}>Code</button>
                </a>
                <a
                  href="https://magnificent-valkyrie-61d45d.netlify.app/"
                  target="_blank"
                >
                  <button className={styles.livebutton}>Live</button>
                </a>
              </div>
            </div>
            <div className={styles.projecard} data-aos="zoom-out-right">
              <img
                className={styles.projeimage}
                src={wetubelogo}
                data-aos="flip-right"
                alt=""
              />
              <div className={styles.headingpara}>
                <h4>Inspired from Youtube.com</h4>
                <p style={{ textAlign: "justify" }}>
                  wetube.com is a website where you can watch various kinds of
                  videos from world. The video service can be accessed on PCs,
                  laptops, tablets and via mobile phones. youser can search the
                  populer videos just by using the search feature of the
                  webpage. It loads fast and you can watch any video like
                  youtube app. <br />
                  <strong>Tech-Stacks used -</strong> HTML, CSS, JAVASCRIPT,
                  BOOTSTRAP, Material UI <br />
                  <strong>Tools -</strong> GitHub,VS code, Netlify
                  <br />
                  <strong>My tasks - </strong> To build over all website using
                  the concepts of HTML , CSS, JAVASCRIPT, API calling.
                </p>
                <a
                  href="https://github.com/Narayan-Chatalwar/Wetube.com"
                  target="_blank"
                >
                  <button className={styles.codebutton}>Code</button>
                </a>
                <a
                  href="https://zealous-bose-6594db.netlify.app"
                  target="_blank"
                >
                  <button className={styles.livebutton}>Live</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
