import React,{useEffect} from 'react';
import styles from "./About.module.css";
import blob2 from "../Atributes/blobanimation2.svg";
import Aos from "aos";
import "aos/dist/aos.css";


const About = () => {

   useEffect(() => {
     Aos.init({ duration: 6000 });
   }, []);
  
  
  return (
    <div id="about" className={styles.mainabout}>
      <div className={styles.aboutcontainer}>
        <img src={blob2} alt="" className={styles.blob2} />
        <h2 className={styles.headingabout}>About</h2>
        <div className={styles.underline}></div>
        <h2 className={styles.headingname}>I'am Narayan Chatalwar</h2>
        <p className={styles.para} data-aos="zoom-in-up">
          Quick learner and an aspiring full-stack web developer with core
          knowledge of MERN stack technology. Looking forward to applying and
          enhancing my skills and knowledge as a developer.
        </p>
       

        <p className={styles.emailpara} data-aos="fade-down">
          Drop a mail @{" "}
          <a href="https://www.narayanchatalwar@gmail.com">
            Narayanchatalwar@gmail.com{" "}
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;