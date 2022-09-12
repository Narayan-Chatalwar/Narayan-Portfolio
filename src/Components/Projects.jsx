import React, { useEffect } from "react";
import styles from "./Projects.module.css";
import bebodywiselogo from "../Atributes/bebodywise.png";
import natureslogo from "../Atributes/naturesbasket.png";
import kimayehome from "../Atributes/kimayehome.png";
import rmhomepage from "../Atributes/rmhomepage.png";
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
                src={rmhomepage}
                data-aos="flip-right"
                alt=""
              />
              <div className={styles.headingpara} >
                <h4 style={{fontWeight:"bold"}}>Inspired by Rentomojo.com</h4>
                <p style={{ textAlign: "justify" }}>
                  Rentomojo.com is a website where you can get all kind of products like appliances, smartphones, fitness equipments, work from home essientials in simple installments or rents.
                  Functionalities - landing page,
                  login, products page, product detail page, cart page,
                  checkout page, payment detail page, filters.
                  
                  <br />
                  <strong> Tech-Stacks used -</strong> React.js, Redux, Chakra UI, HTML, CSS, JAVASCRIPT,
                  BOOTSTRAP <br /> <strong>Tools -</strong> GitHub,VS code,
                  Netlify, Versel
                  <br />
                  <strong>My tasks - </strong> To build overall json data as
                  well as with some front page div and some pages like refer and
                  earn.
                </p>
                <a
                  href="https://github.com/Narayan-Chatalwar/Rentomojo-com"
                  target="_blank"
                >
                  <button className={styles.codebutton}>Code</button>
                </a>
                <a
                  href="https://rentomojo-com-theta.vercel.app/"
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
                src={kimayehome}
                data-aos="flip-right"
                alt=""
              />
              <div className={styles.headingpara}>
                <h4 style={{fontWeight:"bold"}}>Inspired by kimaye.com</h4>
                <p style={{ textAlign: "justify" }}>
                  kimaye.com is a website where you can get the best quality and certified fruits in cheaper rates at your doorstep.   
                   Functionalities - landing page, scroll
                  bars, login, signup, products page, product detail page, cart
                  page, checkout page, payment detail page.
                  <br /> <strong>Tech-Stacks used - </strong>
                  React.js, Redux, Chakra UI, HTML, CSS, JAVASCRIPT, BOOTSTRAP. <br />
                  <strong>Tools - </strong>
                  GitHub, VS code, Netlify, Versel, Heroku
                  <br />
                  <strong>My tasks - </strong> To Build overall website considering the responsiveness for all kind of devides.
                </p>
                <a
                  href="https://github.com/Narayan-Chatalwar/kimaye.com"
                  target="_blank"
                >
                  <button className={styles.codebutton}>Code</button>
                </a>
                <a
                  href="https://kimye-com.vercel.app/"
                  target="_blank"
                >
                  <button className={styles.livebutton}>Live</button>
                </a>
              </div>
            </div>
            <div className={styles.projecard} data-aos="zoom-out-right">
              
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
