import React,{useEffect} from 'react';
import styles from "./Skills.module.css";
import reactlogo from "../Atributes/reactlogo.svg";
import htmllogo from "../Atributes/html.svg";
import csslogo from "../Atributes/csslogo.png";
import javascriptlogo from "../Atributes/javascriptlogo.svg";
import materiallogo from "../Atributes/materiallogo.png";
import expresslogo from "../Atributes/expresslogo.png";
import nodelogo from "../Atributes/nodelogo.png";
import mongologo from "../Atributes/mongologo.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {

   useEffect(() => {
     Aos.init({ duration: 6000 });
   }, []);
  
  return (
    <div id="skills">
      <div className={styles.mainskills}>
        <h1
          className={styles.skillhead}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          {" "}
          Skills
        </h1>
        <div className={styles.underlineskill}></div>
        <div className={styles.skillscontainer}>
          <div className={styles.leftskills}>
            <h1>Front-end Skills</h1>
            <div
              className={styles.divcard}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                src={htmllogo}
                className={styles.imagelogo}
                style={{ width: "30px" }}
                alt="react logo"
              />
              <h5 className={styles.imagename}>HTML 5</h5>
            </div>
            <div
              className={styles.divcard}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                src={csslogo}
                className={styles.imagelogo}
                style={{ width: "30px" }}
                alt="react logo"
              />
              <h5 className={styles.imagename}>CSS 3</h5>
            </div>
            <div
              className={styles.divcard}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                src={javascriptlogo}
                className={styles.imagelogo}
                style={{ width: "30px" }}
                alt="react logo"
              />
              <h5 className={styles.imagename}>JavaScript</h5>
            </div>
            <div
              className={styles.divcard}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                src={reactlogo}
                className={styles.imagelogo}
                style={{ width: "30px" }}
                alt="react logo"
              />
              <h5 className={styles.imagename}>React</h5>
            </div>
            <div
              className={styles.divcard}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                src={materiallogo}
                className={styles.imagelogo}
                style={{ width: "30px" }}
                alt="react logo"
              />
              <h5 className={styles.imagename}>Material UI</h5>
            </div>
          </div>

          <div className={styles.rightskills}>
            <h1>Back-end Skills</h1>
            <div
              className={styles.divcard}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                src={expresslogo}
                className={styles.imagelogo}
                style={{ width: "30px" }}
                alt="react logo"
              />
              <h5 className={styles.imagename}>Express JS</h5>
            </div>
            <div
              className={styles.divcard}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                src={nodelogo}
                className={styles.imagelogo}
                style={{ width: "30px" }}
                alt="react logo"
              />
              <h5 className={styles.imagename}>Node JS</h5>
            </div>
            <div
              className={styles.divcard}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                src={mongologo}
                className={styles.imagelogo}
                style={{ width: "30px" }}
                alt="react logo"
              />
              <h5 className={styles.imagename}>Mongo DB</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;